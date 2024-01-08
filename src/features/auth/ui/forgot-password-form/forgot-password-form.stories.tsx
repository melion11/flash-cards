import type { Meta, StoryObj } from '@storybook/react'
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6'

import { ForgotPasswordForm } from '@features/auth'

const meta: Meta<typeof ForgotPasswordForm> = {
  title: 'Auth/ForgotPasswordForm',
  component: ForgotPasswordForm,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: '/' },
    }),
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
