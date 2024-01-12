import { ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import { CircleLoader } from './circle-loader/circle-loader.tsx'
import { LinearLoader } from './linear-loader/linear-loader.tsx'
import s from './page-loader.module.scss'

type PageLoaderProps = {
  circle?: boolean
  linear?: boolean
} & ComponentPropsWithoutRef<'div'>
export const PageLoader = (props: PageLoaderProps) => {
  const { circle, linear, className, ...restProps } = props

  const classNames = {
    root: clsx(s.root, className),
  }

  return (
    <div className={classNames.root} {...restProps}>
      {circle && <CircleLoader />}
      {linear && <LinearLoader />}
    </div>
  )
}
