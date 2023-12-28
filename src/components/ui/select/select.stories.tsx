import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { CustomSelect, CustomSelectProps } from './select.tsx'

const meta = {
  title: 'components/CustomSelect',
  component: CustomSelect,
  tags: ['autodocs'],
} satisfies Meta<typeof CustomSelect>

export default meta

const initialState = [
  { value: 'first', name: 'First Select', disabled: false },
  { value: 'second', name: 'Second Select', disabled: false },
  { value: 'third', name: 'Third Select', disabled: false },
  { value: 'fourth', name: 'Fourth Select', disabled: true },
]

export const Default = {
  render: (args: CustomSelectProps) => {
    const [value, setValue] = useState(initialState[1].value)
    const onChangeHandler = (value: string) => {
      setValue(value)
    }

    return (
      <div>
        <CustomSelect {...args} value={value} onValueChange={onChangeHandler} />
        <p>Selected value: {value}</p>
      </div>
    )
  },

  args: {
    options: initialState,
    label: 'Select-box',
    disabled: false,
    errorMessage: '',
  },
}
