import { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

type ButtonProps<T extends ElementType = 'button'> = {
  variant?: 'primary' | 'secondary' | 'link' | 'tertiary'
  children?: ReactNode
  as?: T
  className?: string
  fullWidth?: boolean
  onClick?: () => void
  onSubmit?: () => void
  style?: CSSProperties
} & ComponentPropsWithoutRef<T>
export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    variant = 'primary',
    children,
    className,
    fullWidth,
    disabled,
    onClick,
    as: Component = 'button',
    style,
    ...restProps
  } = props

  const classNames = {
    button: clsx(s[variant], fullWidth ? s.fullWidth : '', className),
  }

  return (
    <Component onClick={onClick} className={classNames.button} disabled={disabled} {...restProps}>
      {children}
    </Component>
  )
}
