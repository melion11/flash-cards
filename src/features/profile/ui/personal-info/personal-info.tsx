import s from './personal-info.module.scss'

import { EditIcon, Logout } from '@/assets'
import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, Typography } from '@components/ui'

type PersonalInfoProps = {
  username?: string
  email?: string
}
export const PersonalInfo = ({ username, email }: PersonalInfoProps) => {
  return (
    <div className={s.root}>
      <div className={s.description}>
        <div className={s.usernameWrapper}>
          <Typography className={s.username} variant={TypographyVariant.H1}>
            {username}
          </Typography>
          <EditIcon />
        </div>
        <Typography className={s.email} variant={TypographyVariant.Body2}>
          {email}
        </Typography>
      </div>
      <Button variant={ButtonVariant.Secondary}>
        <Logout />
        Logout
      </Button>
    </div>
  )
}
