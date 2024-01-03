import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'
import { NavLink } from 'react-router-dom'

import logo from '../../../assets/Logo.png'
import { Button } from '../button'

import s from './header.module.scss'
import { HeaderMenu } from './headerMenu/headerMenu.tsx'

type HeaderProps = {
  className?: string
} & ComponentPropsWithoutRef<'header'>

export const Header = forwardRef<ElementRef<'header'>, HeaderProps>((props, ref) => {
  const { className } = props

  const isLogin = true

  const classNames = {
    root: clsx(s.root, className),
  }

  return (
    <header className={classNames.root} ref={ref}>
      <div className={s.headerWrapper}>
        <NavLink className={s.logoLink} to={'/'}>
          <img className={s.logo} src={logo} alt={'logo'} />
        </NavLink>
        {isLogin ? <HeaderMenu /> : <Button>Sign in</Button>}
      </div>
    </header>
  )
})
