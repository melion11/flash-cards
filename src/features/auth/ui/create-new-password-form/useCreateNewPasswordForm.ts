import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export type CreateNewPasswordFormValues = z.infer<typeof CreateNewPasswordSchema>

const CreateNewPasswordSchema = z.object({
  password: z.string().min(3, { message: 'Must be 3 or more characters long' }),
})

export const useCreateNewPasswordForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateNewPasswordFormValues>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(CreateNewPasswordSchema),
  })

  return { control, errors, handleSubmit }
}
