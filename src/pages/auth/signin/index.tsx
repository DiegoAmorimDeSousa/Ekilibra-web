import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Container, ErrorMessage, Form, GoogleProvider, Input, InputButtons, InputGroup, Label, Logo, SubmitButton, Title } from './styles'
import EkilibraLogo from '../../../assets/logo.png';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import { loginSchema } from '../../../schemas/auth';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../store/slices/authSlice";
import { AppDispatch, RootState } from "../../../store";

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
  const auth = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if(auth && auth?.user){
      navigate('/home')
    }
  }, [auth])

  const onSubmit: SubmitHandler<LoginFormInputs> = async data => {
    try {
      dispatch(loginUser(data));
    } catch (err) {
      console.log("Erro ao fazer login", err);
    }
  };

  return (
    <Container>
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
          <Input
            id="password"
            type="password"
            placeholder="*********"
            hasError={!!errors.password}
            {...register('password')}
          />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </InputGroup>
        <GoogleProvider>
          <GoogleOAuthProvider clientId="726269650501-m6onmkh77kl11ojt2q94519t1107s7ku.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={credentialResponse => {
                console.log(credentialResponse.credential);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </GoogleOAuthProvider>
        </GoogleProvider>
        <InputButtons>
          <SubmitButton type="submit" onClick={() => navigate("/signup")} className="first-button">Criar conta</SubmitButton>
          <SubmitButton type="submit">Entrar</SubmitButton>
        </InputButtons>
      </Form>
    </Container>
  );
};

export default LoginPage;
