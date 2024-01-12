import { clsx } from 'clsx'

import s from './linear-loader.module.scss'

type LinearLoaderProps = {
  className?: string
}

export const LinearLoader = ({ className }: LinearLoaderProps) => {
  const classNames = {
    loader: clsx(s.loader, s.linear, className),
  }

  return <span className={classNames.loader}></span>
}
