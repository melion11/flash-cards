import type { Meta, StoryObj } from '@storybook/react'

import { Page } from './page'

const meta: Meta<typeof Page> = {
  title: 'Components/Layout/Page',
  component: Page,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // children: <SignInForm onSubmit={data => action('SignIn data')(data)} />,
    children: <div>Sign In</div>,
  },
}
