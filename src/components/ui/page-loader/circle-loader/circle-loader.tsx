import { clsx } from 'clsx'

import s from './circle-loader.module.scss'

type CircleLoaderProps = {
  className?: string
}
export const CircleLoader = ({ className }: CircleLoaderProps) => {
  const classNames = {
    loader: clsx(s.loader, s.circle, className),
  }

  return <span className={classNames.loader}></span>
}
