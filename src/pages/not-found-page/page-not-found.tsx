import { ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'
import { Link } from 'react-router-dom'

import NotFound from '../../assets/images/NotFound.tsx'
import { Button, Typography } from '../../components/ui'

import s from './page-not-found.module.scss'

type PageNotFoundProps = ComponentPropsWithoutRef<'section'>
export const PageNotFound = (props: PageNotFoundProps) => {
  const { className, ...restProps } = props

  const classNames = {
    root: clsx(s.Root, className),
  }

  return (
    <section className={classNames.root} {...restProps}>
      <div className={s.container}>
        <NotFound className={s.image} />
        <Typography as={'h2'} variant={'subtitle1'}>
          Sorry, page not found :(
        </Typography>
        <Button as={Link} to={'/'}>
          Go back Home
        </Button>
      </div>
    </section>
  )
}
