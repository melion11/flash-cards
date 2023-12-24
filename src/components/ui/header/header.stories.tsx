import type { Meta, StoryObj } from '@storybook/react'
import { withRouter, reactRouterParameters } from 'storybook-addon-react-router-v6'

import { Header } from '../header'

const meta = {
  title: 'components/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: '/' },
    }),
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
