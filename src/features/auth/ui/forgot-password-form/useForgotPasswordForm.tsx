import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export type ForgotPasswordFormValues = z.infer<typeof ForgotPasswordSchema>

const ForgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }).trim(),
})

export const useForgotPasswordForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ForgotPasswordFormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(ForgotPasswordSchema),
  })

  return { control, errors, handleSubmit }
}
