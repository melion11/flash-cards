import { useState } from 'react'

import s from './profile.module.scss'

import { TypographyVariant } from '@/common'
import { Card, Typography } from '@components/ui'
import { EditProfile, ImageUploader } from '@features/profile'
import { PersonalInfo } from '@features/profile/ui/personal-info'

export const Profile = () => {
  const [editMode, setEditMode] = useState(false)

  const username = 'Ivan'
  const email = 'lalala@gmail.com'

  return (
    <Card className={s.root}>
      <Typography className={s.profileTitle} as={'h1'} variant={TypographyVariant.Large}>
        Personal Information
      </Typography>
      <ImageUploader editMode={editMode} />
      {editMode ? (
        <EditProfile username={username} onSubmit={() => {}} setEditMode={setEditMode} />
      ) : (
        <PersonalInfo username={username} email={email} setEditMode={setEditMode} />
      )}
    </Card>
  )
}
