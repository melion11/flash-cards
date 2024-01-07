import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { clsx } from 'clsx'

import { Typography } from '../typography'

import s from './textfield.module.scss'

import { EyeOff, EyeOn, Search } from '@/assets'

type TextFieldProps = {
  label?: string
  value?: string
  onChangeValue?: (value: string) => void
  errorMessage?: string
  search?: boolean
} & ComponentPropsWithoutRef<'input'>
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    onChange,
    disabled,
    errorMessage,
    placeholder,
    value,
    search,
    onChangeValue,
    className,
    label,
    type,
    id,
    ...restProps
  } = props

  const [showPassword, setShowPassword] = useState(false)

  const classNames = {
    rootBlock: clsx(s.rootBlock),
    field: clsx(s.field, !!errorMessage && s.error, search && s.hasSearchIcon, className),
    label: clsx(s.label, disabled && s.disabled, className),
    password: clsx(s.password, disabled && s.disabled),
    searchIcon: clsx(s.searchIcon, disabled && s.disabled),
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event)
    onChangeValue?.(event.currentTarget.value)
  }

  const labelJSX = label && (
    <Typography className={classNames.label} variant={'body2'} as={'label'} htmlFor={id}>
      {label}
    </Typography>
  )

  const finalType = getFinalType(type, showPassword)

  const isShowButtonPassword = type === 'password'

  return (
    <div className={classNames.rootBlock}>
      {labelJSX}
      {search && <Search className={classNames.searchIcon} />}
      <div className={s.inputWrapper}>
        <input
          id={id}
          autoFocus
          type={finalType}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          className={classNames.field}
          onChange={event => onChangeHandler(event)}
          ref={ref}
          {...restProps}
        />
        {isShowButtonPassword && (
          <button
            type={'button'}
            className={classNames.password}
            onClick={() => setShowPassword(prev => !prev)}
          >
            {showPassword ? <EyeOn /> : <EyeOff />}
          </button>
        )}
      </div>
      {errorMessage && <Typography variant={'error'}>{errorMessage}</Typography>}
    </div>
  )
})

const getFinalType = (type: ComponentPropsWithoutRef<'input'>['type'], showPassword: boolean) => {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
