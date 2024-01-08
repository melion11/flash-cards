import s from './profile.module.scss'

import { TypographyVariant } from '@/common'
import { Card, Typography } from '@components/ui'
import { EditProfile, ImageUploader } from '@features/profile'
import { PersonalInfo } from '@features/profile/ui/personal-info'

export const Profile = () => {
  const editMode = true

  return (
    <Card className={s.root}>
      <Typography className={s.profileTitle} as={'h1'} variant={TypographyVariant.Large}>
        Personal Information
      </Typography>
      <ImageUploader />
      {editMode ? (
        <EditProfile username={'Ivan'} onSubmit={() => {}} />
      ) : (
        <PersonalInfo username={'Ivan'} email={'lalala@gmail.com'} />
      )}
    </Card>
  )
}
