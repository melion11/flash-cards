import type { Meta, StoryObj } from '@storybook/react'
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6'

import { PageNotFound } from './page-not-found.tsx'

const meta = {
  title: 'Components/Illustrations/PageNotFound',
  component: PageNotFound,
  tags: ['autodocs'],
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: '/' },
    }),
  },
} satisfies Meta<typeof PageNotFound>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
