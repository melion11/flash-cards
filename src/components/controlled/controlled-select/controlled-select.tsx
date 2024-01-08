import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { CustomSelect, CustomSelectProps } from '@components/ui'

type ControlledSelectProps<TFieldValues extends FieldValues> = UseControllerProps<TFieldValues> &
  Omit<CustomSelectProps, 'value' | 'onChange'>

export const ControlledSelect = <TFieldValues extends FieldValues>(
  props: ControlledSelectProps<TFieldValues>
) => {
  const { control, name, ...restProps } = props

  const {
    field: { value, onChange },
  } = useController({
    control,
    name,
  })

  return <CustomSelect value={value} onValueChange={onChange} {...restProps} />
}
