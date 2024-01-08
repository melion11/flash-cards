import s from './image-uploader.module.scss'

import { EditIcon } from '@/assets'
import { ButtonVariant } from '@/common'
import { Button } from '@components/ui'
import { CustomAvatar } from '@components/ui/avatar/avatar.tsx'

type ImageUploaderProps = {
  image?: string
  username?: string
}
export const ImageUploader = ({ image, username }: ImageUploaderProps) => {
  return (
    <div className={s.avatarWrapper}>
      <CustomAvatar className={s.avatar} image={image} username={username} />
      <Button className={s.editBtn} variant={ButtonVariant.Secondary}>
        <EditIcon />
      </Button>
    </div>
  )
}
