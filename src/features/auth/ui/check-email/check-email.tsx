import { Link } from 'react-router-dom'

import s from './check-email.module.scss'

import { CheckEmailImg } from '@/assets'
import { Route, TypographyVariant } from '@/common'
import { Button, Card, Typography } from '@components/ui'

type CheckEmailProps = {
  email: string
}

export const CheckEmail = (props: CheckEmailProps) => {
  const { email } = props

  return (
    <Card className={s.root}>
      <Typography className={s.formTitle} as={'h1'} variant={TypographyVariant.Large}>
        Check Email
      </Typography>
      <div className={s.imageWrapper}>
        <CheckEmailImg />
      </div>
      <Typography className={s.emailText} variant={TypographyVariant.Body2}>
        We’ve sent an Email with instructions to {email}
      </Typography>
      <Button className={s.submitBtn} fullWidth as={Link} to={Route.SignIn}>
        Back to Sign In
      </Button>
    </Card>
  )
}
