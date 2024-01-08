import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './edit-profile.module.scss'

import { ControlledTextfield } from '@components/controlled'
import { Button } from '@components/ui'

type EditProfileProps = {
  username: string
  onSubmit: (data: EditProfileFormValues) => void
}

export type EditProfileFormValues = z.infer<typeof EditProfileSchema>

const EditProfileSchema = z.object({
  username: z.string().min(1, { message: 'Must be 1 or more characters long' }),
})

export const EditProfile = ({ username, onSubmit }: EditProfileProps) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      username,
    },
    resolver: zodResolver(EditProfileSchema),
  })

  const handleSubmitHandler = (data: EditProfileFormValues) => {
    onSubmit(data)
  }

  return (
    <form className={s.root} onSubmit={handleSubmit(handleSubmitHandler)}>
      <div className={s.description}>
        <ControlledTextfield control={control} name={'username'} label={'Nickmame'} />
      </div>
      <Button fullWidth>Save Changes</Button>
    </form>
  )
}
