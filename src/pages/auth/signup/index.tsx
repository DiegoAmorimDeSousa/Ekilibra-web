import React, { useState } from 'react';
import { Eye, EyeOff, Loader } from 'lucide-react'; 
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Container, ErrorMessage, Form, GoogleProvider, Input, InputButtons, InputGroup, Label, Logo, PasswordWrapper, SubmitButton, Title, TogglePasswordButton } from './styles';
import EkilibraLogo from '../../../assets/logo.png';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import { signupSchema } from '../../../schemas/auth';
import { useDispatch } from "react-redux";
import { signupUser } from "../../../store/slices/authSlice";
import { AppDispatch } from "../../../store";
import InputMask from 'react-input-mask'; 

type SignupFormInputs = z.infer<typeof signupSchema>;

const SignupPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
  });

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev)

  const onSubmit: SubmitHandler<SignupFormInputs> = async (data) => {
    setIsLoading(true); 

    try {
      const mappedData = {
        name: data.nome,
        phone: data.telefone,
        email: data.email,
        password: data.password,
      };

      const response = await dispatch(signupUser(mappedData));

      if (response.meta.requestStatus === "fulfilled" && response.payload?.message === "User created") {
        navigate("/", { state: { message: "success" } });
      }
    } catch (err) {
      console.log("Erro ao criar conta", err);
    } finally {
      setIsLoading(false); // Desativa o loading
    }
  };

  return (
    <Container>
      <Logo src={EkilibraLogo} alt="logo ekilibra"/>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Cadastro</Title>
        
        <InputGroup>
          <Label htmlFor="nome">Nome</Label>
          <Input
            id="nome"
            placeholder="Fulano da Silva"
            type="text"
            hasError={!!errors.nome}
            {...register('nome')}
          />
          {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="telefone">Telefone</Label>
          <InputMask
            className='input'
            id="telefone"
            mask="(99) 99999-9999" 
            placeholder="(00) 0 0000-0000"
            {...register('telefone')}
          />
          {errors.telefone && <ErrorMessage>{errors.telefone.message}</ErrorMessage>}
        </InputGroup>

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

        <InputGroup>
          <Label htmlFor="confirmPassword">Confirmar Senha</Label>
          <PasswordWrapper>
            <Input id="confirmPassword" placeholder="*********" type={showConfirmPassword ? "text" : "password"} hasError={!!errors.confirmPassword} {...register('confirmPassword')} />
            <TogglePasswordButton type="button" onClick={toggleConfirmPasswordVisibility}>
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} fill='white' />}
            </TogglePasswordButton>
          </PasswordWrapper>
          {errors.confirmPassword && <ErrorMessage>{(errors.confirmPassword as { message: string }).message}</ErrorMessage>}
        </InputGroup>

        <GoogleProvider>
          <GoogleOAuthProvider clientId="726269650501-m6onmkh77kl11ojt2q94519t1107s7ku.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                navigate('/create-password', { state: { googleToken: credentialResponse.credential } });
              }}
              onError={() => {
                console.log('Login Failed');
              }}
              text='continue_with'
            />
          </GoogleOAuthProvider>
        </GoogleProvider>

        <InputButtons>
          <SubmitButton onClick={() => navigate("/")} type="button" className="first-button">Voltar</SubmitButton>
          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? <Loader size={20} className="loading-icon" /> : "Criar conta"}
          </SubmitButton>
        </InputButtons>
      </Form>
    </Container>
  );
};

export default SignupPage;
