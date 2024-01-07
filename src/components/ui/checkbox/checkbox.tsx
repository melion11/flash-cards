import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import Check from '../../../assets/icons/check.tsx'
import { Label } from '../label'
import { Typography } from '../typography'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  id?: string
  label?: string
  left?: boolean
} & ComponentPropsWithoutRef<typeof Checkbox.Root>

export const CustomCheckbox = forwardRef<ElementRef<typeof Checkbox.Root>, CheckboxProps>(
  (
    { id, label, disabled, checked, required, onCheckedChange, left, className }: CheckboxProps,
    ref
  ) => {
    const classNames = {
      wrapper: clsx(s.wrapper, className),
      root: clsx(s.checkboxRoot),
      indicator: clsx(s.checkboxIndicator),
      label: s.label,
      buttonWrapper: clsx(s.buttonWrapper, left && s.left),
    }

    return (
      <div className={classNames.wrapper}>
        <Label className={classNames.label}>
          <div className={classNames.buttonWrapper}>
            <Checkbox.Root
              ref={ref}
              className={classNames.root}
              checked={checked}
              id={id}
              disabled={disabled}
              onCheckedChange={onCheckedChange}
              required={required}
            >
              <Checkbox.Indicator className={classNames.indicator} asChild>
                <Check />
              </Checkbox.Indicator>
            </Checkbox.Root>
          </div>
          <Typography as={'label'} variant={'body2'}>
            {label}
          </Typography>
        </Label>
      </div>
    )
  }
)
