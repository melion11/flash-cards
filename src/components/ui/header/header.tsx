import { NavLink } from 'react-router-dom'

import logo from '../../../assets/Logo.png'
import { Button } from '../button'

import s from './header.module.scss'
import { HeaderMenu } from './headerMenu/headerMenu.tsx'

export const Header = () => {
  const isLogin = true

  return (
    <header>
      <div className={s.headerWrapper}>
        <NavLink className={s.logoLink} to={'/'}>
          <img className={s.logo} src={logo} alt={'logo'} />
        </NavLink>
        {isLogin ? <HeaderMenu /> : <Button>Sign in</Button>}
      </div>
    </header>
  )
}
