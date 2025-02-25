import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { Container, ErrorMessage, Form, GoogleProvider, Input, InputButtons, InputGroup, Label, Logo, PasswordWrapper, SubmitButton, Title, TogglePasswordButton } from './styles'
import EkilibraLogo from '../../../assets/logo.png';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import { loginSchema } from '../../../schemas/auth';
import { useDispatch } from "react-redux";
import { loginUser } from "../../../store/slices/authSlice";
import { AppDispatch } from "../../../store";

type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await dispatch(loginUser(data));

      if (response.payload?.user?.id) {
        navigate('/home');
      } else {
        toast.error("Usuário não encontrado", { position: "top-right" }); 
      }
    } catch (err) {
      toast.error("Erro ao fazer login. Tente novamente.");
      console.error("Erro ao fazer login", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <ToastContainer /> 
      <Logo src={EkilibraLogo} alt="logo ekilibra"/>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Login</Title>
        <InputGroup>
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            placeholder="email@login.com"
            type="email"
            hasError={!!errors.email}
            {...register('email')}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Senha</Label>
          <PasswordWrapper>
            <Input id="password" placeholder="*********" type={showPassword ? "text" : "password"} hasError={!!errors.password} {...register('password')} />
            <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} fill='white' />}
            </TogglePasswordButton>
          </PasswordWrapper>
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </InputGroup>
        <GoogleProvider>
          <GoogleOAuthProvider clientId="726269650501-m6onmkh77kl11ojt2q94519t1107s7ku.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                const response = await dispatch(loginUser({
                  googleToken: credentialResponse.credential,
                }));

                if (response.payload?.user?.id) {
                  navigate('/home');
                } else {
                  toast.error("Usuário não encontrado", { position: "top-right" }); 
                }
              }}
              onError={() => {
                toast.error("Falha ao autenticar com Google.");
                console.log('Login Failed');
              }}
            />
          </GoogleOAuthProvider>
        </GoogleProvider>
        <InputButtons>
          <SubmitButton type="button" onClick={() => navigate("/signup")} className="first-button">
            Criar conta
          </SubmitButton>
          <SubmitButton type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </SubmitButton>
        </InputButtons>
      </Form>
    </Container>
  );
};

export default LoginPage;
