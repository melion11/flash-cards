import { ComponentPropsWithoutRef, CSSProperties, ElementRef, forwardRef } from 'react'

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'
import { clsx } from 'clsx'

import { ArrowDown } from '../../../assets'
import { Label } from '../label'
import { Typography } from '../typography'

import s from './select.module.scss'
import { CustomSelectItem } from './selectItem'

export type SelectOption = {
  value: string
  name: string
  disabled?: boolean
}

export type CustomSelectProps = {
  className?: string
  label?: string
  errorMessage?: string
  style?: CSSProperties
  placeholder?: string
  options?: SelectOption[]
  width?: CSSProperties['width']
} & ComponentPropsWithoutRef<typeof Select.Root>

export const CustomSelect = forwardRef<ElementRef<typeof Select.Root>, CustomSelectProps>(
  (props: CustomSelectProps, ref) => {
    const {
      className,
      placeholder,
      width = '100%',
      style,
      label,
      disabled,
      defaultValue,
      errorMessage,
      onValueChange,
      value,
      options,
      ...restProps
    } = props

    const classNames = {
      label: clsx(s.SelectLabel, disabled && s.disabled),
      trigger: clsx(s.SelectTrigger, errorMessage && s.error, className),
      triggerIcon: s.SelectIcon,
      content: s.SelectContent,
      scrollButton: s.SelectScrollButton,
      viewport: s.SelectViewport,
    }

    const showError = !!errorMessage && errorMessage.length > 0

    const selectOptions = options?.map(el => {
      return (
        <CustomSelectItem key={el.value} value={el.value} disabled={el.disabled}>
          {el.name}
        </CustomSelectItem>
      )
    })

    const rootStyle = { width }

    return (
      <>
        <Label label={label} className={classNames.label} style={rootStyle}>
          <Select.Root
            onValueChange={onValueChange}
            value={value}
            defaultValue={defaultValue}
            disabled={disabled}
            {...restProps}
          >
            <Select.Trigger className={classNames.trigger} ref={ref}>
              <Select.Value placeholder={placeholder} />
              <Select.Icon className={classNames.triggerIcon} asChild>
                <ArrowDown />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className={classNames.content} position={'popper'}>
                <Select.ScrollUpButton className={classNames.scrollButton}>
                  <ChevronUpIcon />
                </Select.ScrollUpButton>
                <Select.Viewport className={classNames.viewport} asChild>
                  <Select.Group>{selectOptions}</Select.Group>
                </Select.Viewport>
                <Select.ScrollDownButton className={classNames.scrollButton}>
                  <ChevronDownIcon />
                </Select.ScrollDownButton>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </Label>
        {showError && <Typography variant={'error'}>{errorMessage}</Typography>}
      </>
    )
  }
)
