import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { CustomRadioGroup, RadioGroupProps } from '@components/ui'

type ControlledRadioProps<TFieldValues extends FieldValues> = UseControllerProps<TFieldValues> &
  Omit<RadioGroupProps, 'value' | 'onChange'>

export const ControlledRadio = <TFieldValues extends FieldValues>(
  props: ControlledRadioProps<TFieldValues>
) => {
  const { control, name, ...restProps } = props

  const {
    field: { value, onChange },
  } = useController({
    control,
    name,
  })

  return <CustomRadioGroup value={value} onValueChange={onChange} {...restProps} />
}
