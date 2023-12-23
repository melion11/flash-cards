import { useState } from 'react'

import { RadioGroupProps } from '@radix-ui/react-radio-group'
import { Meta, StoryObj } from '@storybook/react'

import { CustomRadioGroup } from './radioGroup.tsx'

const meta = {
  title: 'Components/RadioGroup',
  component: CustomRadioGroup,
  tags: ['autodocs'],
  argTypes: {
    onChange: () => {},
  },
} satisfies Meta<typeof CustomRadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const initialState = [
  { name: 'Samurai 1', value: 'samurai1', disabled: false },
  { name: 'Samurai 2', value: 'samurai2', disabled: true },
  { name: 'Samurai 3', value: 'samurai3', disabled: false },
]

export const Default: Story = {
  args: {
    options: initialState,
    defaultValue: initialState[1].value,
    disabled: false,
    errorMessage: 'Error message',
  },
}

export const RadioGroupWithState = {
  render: (args: RadioGroupProps) => {
    const [value, setValue] = useState(initialState[2].value)

    const onValueChangeHandler = (value: string) => {
      setValue(value)
    }

    return (
      <div>
        <CustomRadioGroup {...args} value={value} onValueChange={onValueChangeHandler} />
        <p>Selected value: {value}</p>
      </div>
    )
  },

  args: {
    options: initialState,
  },
}
