import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'

import { clsx } from 'clsx'

import { Typography } from '../typography'

import s from './table.module.scss'

const Root = forwardRef<ElementRef<'table'>, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...restProps }, ref) => {
    const rootClasses = clsx(s.root, className)

    return <table ref={ref} className={rootClasses} {...restProps} />
  }
)

const Head = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ className, ...restProps }, ref) => {
    const headClasses = clsx(s.thead, className)

    return <thead ref={ref} className={headClasses} {...restProps} />
  }
)

const Body = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ className, ...restProps }, ref) => {
    const bodyClasses = clsx(s.body, className)

    return <tbody ref={ref} className={bodyClasses} {...restProps} />
  }
)

const Row = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...restProps }, ref) => {
    const rowClasses = clsx(s.row, className)

    return <tr ref={ref} className={rowClasses} {...restProps} />
  }
)

const HeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, ...restProps }, ref) => {
    const headCellClasses = clsx(s.headCell, className)

    return <th ref={ref} className={headCellClasses} {...restProps} />
  }
)

const Cell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...restProps }, ref) => {
    const cellClasses = clsx(s.cell, className)

    return <td ref={ref} className={cellClasses} {...restProps} />
  }
)

type EmptyProps = {
  children?: ReactNode
  text?: string
  className?: string
} & ComponentPropsWithoutRef<'div'>

const Empty = forwardRef<ElementRef<'div'>, EmptyProps>(
  (
    {
      text = 'This deck is empty. Click add new deck to fill this deck',
      children,
      className,
      ...restProps
    },
    ref
  ): JSX.Element => {
    const classNames = {
      root: clsx(s.empty, className),
      emptyDescription: s.emptyDescription,
    }
    const emptyClasses = clsx(s.empty, className)

    return (
      <div ref={ref} className={emptyClasses} {...restProps}>
        <Typography className={classNames.emptyDescription} variant={'body1'}>
          {text}
        </Typography>
        {children}
      </div>
    )
  }
)

export const Table = { Root, Head, Body, Row, HeadCell, Cell, Empty }
