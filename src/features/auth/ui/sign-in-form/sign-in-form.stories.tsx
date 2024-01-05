import type { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from './sign-in-form.tsx'

const meta: Meta<typeof SignInForm> = {
  title: 'Auth/SignInForm',
  component: SignInForm,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
