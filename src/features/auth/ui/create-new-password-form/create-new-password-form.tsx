import { DevTool } from '@hookform/devtools'

import s from './create-new-password-form.module.scss'

import { TypographyVariant } from '@/common'
import { ControlledTextfield } from '@components/controlled'
import { Button, Card, Typography } from '@components/ui'
import {
  CreateNewPasswordFormValues,
  useCreateNewPasswordForm,
} from '@features/auth/ui/create-new-password-form/useCreateNewPasswordForm.ts'

type CreateNewPasswordFormProps = {
  onSubmit: (data: CreateNewPasswordFormValues) => void
}

export const CreateNewPasswordForm = (props: CreateNewPasswordFormProps) => {
  const { onSubmit } = props

  const { handleSubmit, control, errors } = useCreateNewPasswordForm()

  const handleSubmitHandler = (data: CreateNewPasswordFormValues) => {
    onSubmit(data)
  }

  return (
    <Card className={s.root}>
      <Typography className={s.formTitle} as={'h1'} variant={TypographyVariant.Large}>
        Create new password
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(handleSubmitHandler)}>
        <div className={s.inputWrapper}>
          <ControlledTextfield
            control={control}
            id={'password'}
            type={'password'}
            errorMessage={errors.password?.message}
            label={'Email'}
            name={'password'}
            placeholder={'Password'}
          />
          <Typography className={s.passwordText} variant={TypographyVariant.Body2}>
            Create new password and we will send you further instructions to email
          </Typography>
        </div>
        <Button className={s.submitBtn} fullWidth type={'submit'}>
          Create new password
        </Button>
      </form>
      <DevTool control={control} />
    </Card>
  )
}
