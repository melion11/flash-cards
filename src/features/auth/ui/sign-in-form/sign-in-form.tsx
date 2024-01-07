import s from './sign-in-form.module.scss'

import { Card, TextField, Typography } from '@components/ui'

type SignInFormProps = {}

export const SignInForm = (props: SignInFormProps) => {
  const {} = props

  return (
    <Card className={s.root}>
      <Typography variant={'large'}>Sign In</Typography>
      <form>
        <div>
          <TextField label={'Email'} name={'email'} />
          <TextField label={'Password'} name={'password'} type={'password'} />
        </div>
      </form>
    </Card>
  )
}
