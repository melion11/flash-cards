import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import { Typography } from '../../typography'

import s from './radioItem.module.scss'

type RadioItemProps = {
  value: string
  name: string
  disabled: boolean
} & ComponentPropsWithoutRef<typeof RadioGroup.Item>

export const RadioItem = forwardRef<ElementRef<typeof RadioGroup.Item>, RadioItemProps>(
  (props: RadioItemProps, ref) => {
    const { disabled, value, name, ...restProps } = props

    const classNames = {
      container: clsx(s.container, disabled && s.disabled),
      item: s.RadioGroupItem,
      indicator: s.RadioGroupIndicator,
      label: clsx(s.Label, disabled && s.disabled),
    }

    return (
      <div className={classNames.container}>
        <RadioGroup.Item
          className={classNames.item}
          value={value}
          id={value}
          disabled={disabled}
          {...restProps}
          ref={ref}
        >
          <RadioGroup.Indicator className={classNames.indicator} />
        </RadioGroup.Item>
        <Typography as={'label'} variant={'body2'} className={classNames.label} htmlFor={value}>
          {name}
        </Typography>
      </div>
    )
  }
)
