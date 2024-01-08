import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { TextField, TextFieldProps } from '@components/ui'

type ControlledTextfieldProps<TFieldValues extends FieldValues> = UseControllerProps<TFieldValues> &
  Omit<TextFieldProps, 'onChange' | 'value'>

export const ControlledTextfield = <TFieldValues extends FieldValues>(
  props: ControlledTextfieldProps<TFieldValues>
) => {
  const { control, name, ...restProps } = props

  const {
    field: { value, onChange },
  } = useController({
    control,
    name,
  })

  return <TextField value={value} onChangeValue={onChange} {...restProps} />
}
