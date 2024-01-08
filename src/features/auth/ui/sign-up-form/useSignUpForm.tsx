import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export type SignUpFormValues = z.infer<typeof signUpSchema>

const signUpSchema = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }).trim(),
    password: z.string().min(3, { message: 'Must be 3 or more characters long' }),
    confirmPassword: z.string().min(3, { message: 'Must be 3 or more characters long' }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Those passwords didn’t match. Try again.',
    path: ['confirmPassword'],
  })

export const useSignUpForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpFormValues>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(signUpSchema),
  })

  return { control, errors, handleSubmit }
}
