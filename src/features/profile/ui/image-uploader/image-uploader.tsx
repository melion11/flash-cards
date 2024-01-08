import s from './image-uploader.module.scss'

import { EditIcon } from '@/assets'
import { FileLoader } from '@components/ui'
import { CustomAvatar } from '@components/ui/avatar/avatar.tsx'

type ImageUploaderProps = {
  image?: string
  username?: string
  editMode?: boolean
}
export const ImageUploader = ({ image, username, editMode }: ImageUploaderProps) => {
  return (
    <div className={s.avatarWrapper}>
      <CustomAvatar className={s.avatar} image={image} username={username} />
      <div className={s.editBtn}>{!editMode && <FileLoader icon={<EditIcon />} />}</div>
    </div>
  )
}
