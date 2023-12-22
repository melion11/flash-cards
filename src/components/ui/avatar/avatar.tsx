import { ComponentPropsWithoutRef, CSSProperties, ElementRef, forwardRef } from 'react'

import * as Avatar from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import { Typography } from '../typography'

import s from './avatar.module.scss'

type CustomAvatarProps = {
  image?: string
  userName?: string
  className?: string
  style?: CSSProperties
} & ComponentPropsWithoutRef<typeof Avatar.Root>

export const CustomAvatar = forwardRef<ElementRef<typeof Avatar.Root>, CustomAvatarProps>(
  ({ userName, image, className, style, ...restProps }: CustomAvatarProps, ref) => {
    const classNames = {
      root: clsx(s.avatarRoot),
      image: clsx(s.avatarImage, className),
      fallback: clsx(s.avatarFallback),
    }

    const fallbackName = userName
      ? userName
          .split(' ')
          .map(el => el.slice(0, 1).toUpperCase())
          .join('')
      : 'A'

    return (
      <Avatar.Root className={classNames.root} style={style} ref={ref} {...restProps}>
        <Avatar.Image className={classNames.image} src={image} alt="avatar" />
        <Avatar.Fallback className={classNames.fallback}>
          <Typography variant={'body1'}> {fallbackName} </Typography>
        </Avatar.Fallback>
      </Avatar.Root>
    )
  }
)
