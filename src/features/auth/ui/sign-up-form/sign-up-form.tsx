import { DevTool } from '@hookform/devtools'
import { Link } from 'react-router-dom'

import s from './sign-up-form.module.scss'

import { Route, TypographyVariant } from '@/common'
import { ControlledTextfield } from '@components/controlled'
import { Button, Card, Typography } from '@components/ui'
import { SignUpFormValues, useSignUpForm } from '@features/auth/ui/sign-up-form/useSignUpForm.tsx'

type SignUpFormProps = {
  onSubmit: (data: SignUpFormValues) => void
}

export const SignUpForm = (props: SignUpFormProps) => {
  const { onSubmit } = props

  const { handleSubmit, control, errors } = useSignUpForm()

  const handleSubmitHandler = (data: SignUpFormValues) => {
    onSubmit(data)
  }

  return (
    <Card className={s.root}>
      <Typography className={s.formTitle} as={'h1'} variant={TypographyVariant.Large}>
        Sign Up
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
          <ControlledTextfield
            control={control}
            id={'confirmPassword'}
            label={'Confirm Password'}
            errorMessage={errors.confirmPassword?.message}
            name={'confirmPassword'}
            type={'password'}
            placeholder={'Confirm Password'}
          />
        </div>
        <Button className={s.submitBtn} fullWidth type={'submit'}>
          Sign Up
        </Button>
      </form>
      <Typography className={s.haveAccText} variant={TypographyVariant.Body2}>
        Already have an account?
      </Typography>
      <Typography
        className={s.signIn}
        to={Route.SignIn}
        as={Link}
        variant={TypographyVariant.Body2}
      >
        Sign In
      </Typography>
      <DevTool control={control} />
    </Card>
  )
}
