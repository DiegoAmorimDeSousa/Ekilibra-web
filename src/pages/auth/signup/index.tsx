import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Container, ErrorMessage, Form, GoogleProvider, Input, InputButtons, InputGroup, Label, Logo, SubmitButton, Title } from './styles';
import EkilibraLogo from '../../../assets/logo.png';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import { signupSchema } from '../../../schemas/auth'

type SignupFormInputs = z.infer<typeof signupSchema>;

const SignupPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignupFormInputs> = data => {
    console.log(data);
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
          <Input
            id="telefone"
            placeholder="(00) 0 0000-0000"
            type="text"
            hasError={!!errors.telefone}
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
          <Input
            id="password"
            type="password"
            placeholder="*********"
            hasError={!!errors.password}
            {...register('password')}
          />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Label htmlFor="confirmPassword">Confirmar Senha</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="*********"
            hasError={!!errors.confirmPassword}
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <ErrorMessage>{(errors.confirmPassword as { message: string }).message}</ErrorMessage>
          )}
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
              text='continue_with'
            />
          </GoogleOAuthProvider>
        </GoogleProvider>
        <InputButtons>
          <SubmitButton onClick={() => navigate("/")} type="submit" className="first-button">Voltar</SubmitButton>
          <SubmitButton type="submit">Criar conta</SubmitButton>
        </InputButtons>
      </Form>
    </Container>
  );
};

export default SignupPage;
