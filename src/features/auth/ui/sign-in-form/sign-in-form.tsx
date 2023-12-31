import { DevTool } from '@hookform/devtools'
import { Link } from 'react-router-dom'

import s from './sign-in-form.module.scss'

import { Route, TypographyVariant } from '@/common'
import { ControlledCheckbox, ControlledTextfield } from '@components/controlled'
import { Button, Card, Typography } from '@components/ui'
import { SignInFormValues, useSignInForm } from '@features/auth/ui/sign-in-form/useSignInForm.ts'

type SignInFormProps = {
  onSubmit: (data: SignInFormValues) => void
}

export const SignInForm = (props: SignInFormProps) => {
  const { onSubmit } = props

  const { handleSubmit, control, errors } = useSignInForm()

  const handleSubmitHandler = (data: SignInFormValues) => {
    onSubmit(data)
  }

  return (
    <Card className={s.root}>
      <Typography className={s.formTitle} as={'h1'} variant={TypographyVariant.Large}>
        Sign In
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(handleSubmitHandler)}>
        <div className={s.inputsWrapper}>
          <ControlledTextfield
            control={control}
            id={'email'}
            errorMessage={errors.email?.message}
            label={'Email'}
            name={'email'}
            placeholder={'Email'}
          />
          <ControlledTextfield
            control={control}
            id={'password'}
            label={'Password'}
            errorMessage={errors.password?.message}
            name={'password'}
            type={'password'}
            placeholder={'Password'}
          />
        </div>
        <ControlledCheckbox left control={control} name={'rememberMe'} label={'Remember me'} />
        <div className={s.forgotWrapper}>
          <Typography
            className={s.forgotPassword}
            to={Route.ForgotPassword}
            as={Link}
            variant={TypographyVariant.Body2}
          >
            Forgot Password?
          </Typography>
        </div>
        <Button className={s.submitBtn} fullWidth type={'submit'}>
          Sign In
        </Button>
      </form>
      <Typography className={s.haveAccText} variant={TypographyVariant.Body2}>
        Don`t have an account?
      </Typography>
      <Typography
        className={s.signUp}
        to={Route.SignUp}
        as={Link}
        variant={TypographyVariant.Body2}
      >
        Sign Up
      </Typography>
      <DevTool control={control} />
    </Card>
  )
}
