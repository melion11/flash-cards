import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import s from './sign-in-form.module.scss'

import { ControlledCheckbox } from '@components/controlled'
import { Button, Card, TextField, Typography } from '@components/ui'

type SignInFormProps = {
  onSubmit: (data: FormValues) => void
}

export type FormValues = z.infer<typeof signInSchema>

const signInSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(5, { message: 'Must be 5 or more characters long' }),
  rememberMe: z.boolean(),
})

export const SignInForm = (props: SignInFormProps) => {
  const { onSubmit } = props

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(signInSchema),
  })

  const handleSubmitHandler = (data: FormValues) => {
    onSubmit(data)
  }

  return (
    <Card className={s.root}>
      <Typography className={s.formTitle} as={'h1'} variant={'large'}>
        Sign In
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(handleSubmitHandler)}>
        <div className={s.inputsWrapper}>
          <TextField
            {...register('email')}
            id={'email'}
            errorMessage={errors.email?.message}
            label={'Email'}
            name={'email'}
            placeholder={'Email'}
          />
          <TextField
            {...register('password')}
            id={'password'}
            label={'Password'}
            errorMessage={errors.password?.message}
            name={'password'}
            type={'password'}
            placeholder={'Password'}
          />
        </div>
        <ControlledCheckbox control={control} name={'rememberMe'} />
        <div className={s.forgotWrapper}>
          <Typography className={s.forgotPassword} to={'/forgot'} as={Link} variant={'body2'}>
            Forgot Password?
          </Typography>
        </div>
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
      <DevTool control={control} />
    </Card>
  )
}
