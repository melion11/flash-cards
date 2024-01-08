import { ComponentPropsWithoutRef, CSSProperties, ElementRef, forwardRef } from 'react'

import * as Avatar from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import { Typography } from '../typography'

import s from './avatar.module.scss'

type CustomAvatarProps = {
  image?: string
  username?: string
  className?: string
  style?: CSSProperties
} & ComponentPropsWithoutRef<typeof Avatar.Root>

export const CustomAvatar = forwardRef<ElementRef<typeof Avatar.Root>, CustomAvatarProps>(
  ({ username, image, className, style, ...restProps }: CustomAvatarProps, ref) => {
    const classNames = {
      root: clsx(s.avatarRoot, className),
      image: clsx(s.avatarImage),
      fallback: clsx(s.avatarFallback),
    }

    const fallbackName = username
      ? username
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
