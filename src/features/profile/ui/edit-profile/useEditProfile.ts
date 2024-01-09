import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export type EditProfileFormValues = z.infer<typeof EditProfileSchema>

const EditProfileSchema = z.object({
  username: z.string().min(1, { message: 'Must be 1 or more characters long' }),
})

export const useEditProfile = (username: string) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username,
    },
    resolver: zodResolver(EditProfileSchema),
  })

  return {
    handleSubmit,
    control,
    errors,
  }
}
