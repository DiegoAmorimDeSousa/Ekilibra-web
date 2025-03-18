import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Container, ErrorMessage, Form, Input, InputButtons, InputGroup, Label, Logo, PasswordWrapper, SubmitButton, Title, TogglePasswordButton } from './styles'
import EkilibraLogo from '../../../assets/logo.png';
import { useLocation, useNavigate } from "react-router-dom";
import { createPasswordSchema } from '../../../schemas/auth';
import { useDispatch } from "react-redux";
import { signupUser } from "../../../store/slices/authSlice";
import { AppDispatch } from "../../../store";

type CreatePasswordFormInputs = z.infer<typeof createPasswordSchema>;

const CreatePasswordPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePasswordFormInputs>({
    resolver: zodResolver(createPasswordSchema),
  });

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const googleToken = location.state?.googleToken;

  const [loading, setLoading] = useState(false); 

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const onSubmit: SubmitHandler<CreatePasswordFormInputs> = async (data) => {
    setLoading(true); 

    try {
      const response = await dispatch(signupUser({
        googleToken: googleToken,
        password: data.newPassword,
        email: location?.search?.split('=')?.[1],
        isAcceptInvate: location?.search?.split('=')?.[1] ? true : false,
      }));

      if (response.meta.requestStatus === "fulfilled" && response.payload?.message === "User created") {
        navigate("/", { state: { message: "success" } });
      }
    } catch (err) {
      console.log("Erro ao fazer login", err);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <Container>
      <Logo src={EkilibraLogo} alt="logo ekilibra"/>
      <Form onSubmit={handleSubmit(onSubmit)}> 
        <Title>Crie sua senha</Title>
        <InputGroup>
          <Label htmlFor="password">Senha</Label>
          <PasswordWrapper>
            <Input id="newPassword" placeholder="*********" type={showPassword ? "text" : "password"} hasError={!!errors.newPassword} {...register('newPassword')} />
            <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} fill='white' />}
            </TogglePasswordButton>
          </PasswordWrapper>
          {errors.newPassword && <ErrorMessage>{errors.newPassword.message}</ErrorMessage>}
        </InputGroup>
        <InputButtons className="first-position">
          <SubmitButton type="submit" disabled={loading}>
            {loading ? "Criando conta..." : "Criar conta"}
          </SubmitButton>
        </InputButtons>
      </Form>
    </Container>
  );
};

export default CreatePasswordPage;
