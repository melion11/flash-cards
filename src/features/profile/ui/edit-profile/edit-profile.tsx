import { DevTool } from '@hookform/devtools'

import s from './edit-profile.module.scss'

import { ControlledTextfield } from '@components/controlled'
import { Button } from '@components/ui'
import {
  EditProfileFormValues,
  useEditProfile,
} from '@features/profile/ui/edit-profile/useEditProfile.ts'

type EditProfileProps = {
  username: string
  onSubmit: (data: EditProfileFormValues) => void
  setEditMode: (value: boolean) => void
}

export const EditProfile = ({ username, onSubmit, setEditMode }: EditProfileProps) => {
  const { handleSubmit, control, errors } = useEditProfile(username)
  const handleSubmitHandler = (data: EditProfileFormValues) => {
    onSubmit(data)
    setEditMode(false)
  }

  return (
    <form className={s.root} onSubmit={handleSubmit(handleSubmitHandler)}>
      <div className={s.description}>
        <ControlledTextfield
          control={control}
          errorMessage={errors.username?.message}
          name={'username'}
          label={'Nickname'}
        />
      </div>
      <Button type={'submit'} fullWidth>
        Save Changes
      </Button>
      <DevTool control={control} />
    </form>
  )
}
