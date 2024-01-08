import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { CheckboxProps, CustomCheckbox } from '@components/ui'

export type ControlledCheckboxProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<CheckboxProps, 'onChange' | 'value'>

export const ControlledCheckbox = <TFieldValues extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  control,
  defaultValue,
  ...checkboxProps
}: ControlledCheckboxProps<TFieldValues>) => {
  const {
    field: { value, onChange },
  } = useController({
    control,
    name,
  })

  return <CustomCheckbox checked={value} onCheckedChange={onChange} {...checkboxProps} />
}
