import { ComponentPropsWithoutRef, CSSProperties, ElementRef, forwardRef } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import { Typography } from '../typography'

import s from './radioGroup.module.scss'
import { RadioItem } from './radioItem'

type RadioGroupOption = {
  name: string
  value: string
  disabled: boolean
}

export type RadioGroupProps = {
  errorMessage?: string
  className?: string
  style?: CSSProperties
  options?: RadioGroupOption[]
} & ComponentPropsWithoutRef<typeof RadioGroup.Root>
export const CustomRadioGroup = forwardRef<ElementRef<typeof RadioGroup.Root>, RadioGroupProps>(
  (props: RadioGroupProps, ref) => {
    const { className, options, errorMessage, onValueChange, value, defaultValue, ...restProps } =
      props

    const classNames = {
      root: clsx(s.RadioGroupRoot, className),
      item: s.RadioGroupItem,
      indicator: s.RadioGroupIndicator,
      label: s.Label,
    }

    const radioItems = options?.map(el => {
      return <RadioItem key={el.value} value={el.value} name={el.name} disabled={el.disabled} />
    })

    return (
      <RadioGroup.Root
        className={classNames.root}
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
        {...restProps}
        ref={ref}
      >
        {radioItems}
        {errorMessage && <Typography variant={'error'}>{errorMessage}</Typography>}
      </RadioGroup.Root>
    )
  }
)
