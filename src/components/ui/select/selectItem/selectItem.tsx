import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as Select from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './selectItem.module.scss'

type CustomSelectItemProps = {
  disabled?: boolean
} & ComponentPropsWithoutRef<typeof Select.Item>

export const CustomSelectItem = forwardRef<ElementRef<typeof Select.Item>, CustomSelectItemProps>(
  (props: CustomSelectItemProps, ref) => {
    const { children, className, ...restProps } = props

    const classNames = {
      item: clsx(s.SelectItem, className),
    }

    return (
      <Select.Item className={classNames.item} {...restProps} ref={ref}>
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    )
  }
)
