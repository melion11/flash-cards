import { DevTool } from '@hookform/devtools'
import { Link } from 'react-router-dom'

import s from './forgot-password-form.module.scss'

import { Route, TypographyVariant } from '@/common'
import { ControlledTextfield } from '@components/controlled'
import { Button, Card, Typography } from '@components/ui'
import {
  ForgotPasswordFormValues,
  useForgotPasswordForm,
} from '@features/auth/ui/forgot-password-form/useForgotPasswordForm.tsx'

type ForgotPasswordFormProps = {
  onSubmit: (data: ForgotPasswordFormValues) => void
}

export const ForgotPasswordForm = (props: ForgotPasswordFormProps) => {
  const { onSubmit } = props

  const { handleSubmit, control, errors } = useForgotPasswordForm()

  const handleSubmitHandler = (data: ForgotPasswordFormValues) => {
    onSubmit(data)
  }

  return (
    <Card className={s.root}>
      <Typography className={s.formTitle} as={'h1'} variant={TypographyVariant.Large}>
        Forgot your password?
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(handleSubmitHandler)}>
        <div className={s.inputWrapper}>
          <ControlledTextfield
            control={control}
            id={'email'}
            errorMessage={errors.email?.message}
            label={'Email'}
            name={'email'}
            placeholder={'Email'}
          />
          <Typography className={s.emailText} variant={TypographyVariant.Body2}>
            Enter your email address and we will send you further instructions
          </Typography>
        </div>
        <Button className={s.submitBtn} fullWidth type={'submit'}>
          Send Instructions
        </Button>
      </form>
      <Typography className={s.rememberPassText} variant={TypographyVariant.Body2}>
        Did you remember your password?
      </Typography>
      <Typography className={s.login} to={Route.SignIn} as={Link} variant={TypographyVariant.Body2}>
        Try logging in
      </Typography>
      <DevTool control={control} />
    </Card>
  )
}
