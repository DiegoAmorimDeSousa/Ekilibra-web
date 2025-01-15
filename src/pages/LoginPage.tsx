import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styled from 'styled-components';
import EkilibraLogo from '../assets/logo.png';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

const loginSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'A senha precisa ter no mínimo 6 caracteres'),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  border-radius: 30px;
`;

const Logo = styled.img`
  width: 200px;
  margin-bottom: 15px;
  object-fit: contain;
`;

const Form = styled.form`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 10px;
  max-width: 300px;
  width: 70%;
  padding: 24px;  
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
  background: white;
  padding: 24px 10px;
  border-bottom: 3px solid #f5f5f5;
  border-radius: 10px 10px 0 0;
  font-family: "Roboto Mono", serif;
  font-size: 25px;
`;

const InputGroup = styled.div`
  margin-bottom: 16px;
  background: white;
  padding: 0 17px 0 0px;
  font-family: "Roboto", serif;
  letter-spacing: 1.5px;
`;

const InputButtons = styled.div`
  font-family: "Roboto", serif;
  background: white;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  justify-content: space-between;

  .first-button {
    background: white;
    border: solid 1px #f4c752;

    &:hover {
      background-color: #fce8bb;
    }
  }
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: medium;
  background: white;
`;

const Input = styled.input<{ hasError?: boolean }>`
  background: white;
  margin-top: 8px;
  width: 100%;
  padding: 8px;
  outline: none;
  border-radius: 10px;
  border: 1px solid ${(props) => (props.hasError ? '#f87171' : '#d1d5db')};
  transition: border-color 0.3s;
  font-family: "Roboto", serif;

  &:focus {
    border-color: #3b82f6;
  }
`;

const ErrorMessage = styled.p`
  color: #f87171;
  font-size: 0.875rem;
  margin-top: 4px;
`;

const GoogleProvider = styled.div`
  width: 100%;
  background: white;
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #f4c752;
  color: black;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 24px;

  &:hover {
    background-color: #fad067;
  }
`;

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = data => {
    console.log(data);
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
          <SubmitButton type="submit" className="first-button">Criar conta</SubmitButton>
          <SubmitButton type="submit">Entrar</SubmitButton>
        </InputButtons>
      </Form>
    </Container>
  );
};

export default LoginPage;
