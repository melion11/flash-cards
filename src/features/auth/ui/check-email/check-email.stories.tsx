import type { Meta, StoryObj } from '@storybook/react'
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6'

import { CheckEmail } from './check-email.tsx'

const meta: Meta<typeof CheckEmail> = {
  title: 'Auth/CheckEmailPage',
  component: CheckEmail,
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
  args: {
    email: 'lalala@gmail.com',
  },
}
