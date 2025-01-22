import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'A senha precisa ter no mínimo 6 caracteres'),
});

export const signupSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'A senha precisa ter no mínimo 6 caracteres'),
  nome: z.string().min(1, 'Preenche o seu nome corretamente'),
  confirmPassword: z.string().min(6, 'A confirmação de senha precisa ter no mínimo 6 caracteres'),
  telefone: z.string()
    .min(10, 'O telefone deve ter no mínimo 10 dígitos')
    .max(15, 'O telefone deve ter no máximo 15 dígitos')
    .regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, 'Número de telefone inválido'),
  }).superRefine((data, ctx) => {
    if (data.confirmPassword !== data.password) {
      ctx.addIssue({
        path: ['confirmPassword'],
        message: 'As senhas não coincidem',
        code: 'custom',
      });
    }
});