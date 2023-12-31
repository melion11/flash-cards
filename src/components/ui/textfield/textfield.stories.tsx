import { Meta, StoryObj } from '@storybook/react'

import { TextField } from './textfield.tsx'

const meta = {
  title: 'Components/Data Entry/TextField',
  component: TextField,
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Input',
    disabled: false,
    search: false,
    label: 'Input',
    id: 'input',
  },
}

export const WithError: Story = {
  args: {
    placeholder: 'Input',
    label: 'Input',
    disabled: false,
    search: false,
    errorMessage: 'Error!',
    id: 'input',
  },
}

export const Password: Story = {
  args: {
    placeholder: 'Password',
    disabled: false,
    search: false,
    type: 'password',
    label: 'Password',
    id: 'input',
  },
}

export const Search: Story = {
  args: {
    placeholder: 'Search',
    disabled: false,
    search: true,
  },
}
