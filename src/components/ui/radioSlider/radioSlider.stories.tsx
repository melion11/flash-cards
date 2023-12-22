import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { RadioSlider } from './radioSlider.tsx'

const meta = {
  title: 'components/RadioSlider',
  component: RadioSlider,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioSlider>

export default meta

export const RadioSliderDefault = {
  render: () => {
    const min = 0
    const max = 15
    const [val, setValues] = useState({ min: 0, max: 15 })
    const onChangeHandler = (values: number[]) => {
      setValues({ min: values[0], max: values[1] })
    }

    return (
      <RadioSlider
        min={min}
        max={max}
        onValueChange={onChangeHandler}
        value={[val.min, val.max]}
        defaultValue={[min, max]}
      />
    )
  },
}
