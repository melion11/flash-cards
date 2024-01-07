import { Link } from 'react-router-dom'

import s from './sign-in-form.module.scss'

import { Button, Card, CustomCheckbox, TextField, Typography } from '@components/ui'

type SignInFormProps = {}

export const SignInForm = (props: SignInFormProps) => {
  const {} = props

  return (
    <Card className={s.root}>
      <Typography className={s.formTitle} as={'h1'} variant={'large'}>
        Sign In
      </Typography>
      <form className={s.form}>
        <div className={s.inputsWrapper}>
          <TextField id={'email'} label={'Email'} name={'email'} placeholder={'Email'} />
          <TextField
            id={'password'}
            label={'Password'}
            name={'password'}
            type={'password'}
            placeholder={'Password'}
          />
        </div>
        <CustomCheckbox left label={'Remember me'} name={'rememberMe'} />
        <Typography className={s.forgotPassword} to={'/forgot'} as={Link} variant={'body2'}>
          Forgot Password?
        </Typography>
        <Button className={s.submitBtn} fullWidth type={'submit'}>
          Sign In
        </Button>
      </form>
      <Typography className={s.haveAccText} variant={'body2'}>
        Don`t have an account?
      </Typography>
      <Typography className={s.signUp} to={'/signUp'} as={Link} variant={'body2'}>
        Sign Up
      </Typography>
    </Card>
  )
}
