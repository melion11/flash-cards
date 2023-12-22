import { ComponentPropsWithoutRef } from 'react'

import logo from '../../../assets/Logo.png'

import s from './header.module.scss'

type HeaderProps = {} & ComponentPropsWithoutRef<'div'>

export const Header = ({}: HeaderProps) => {
  return (
    <header>
      <div>
        <button>
          <img className={s.logo} src={logo} alt={'logo'} />
        </button>
      </div>
    </header>
  )
}
