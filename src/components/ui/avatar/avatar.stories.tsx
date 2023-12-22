import { Meta, StoryObj } from '@storybook/react'

import { CustomAvatar } from './avatar.tsx'

const meta = {
  title: 'Components/Avatar',
  component: CustomAvatar,
  tags: ['autodocs'],
} satisfies Meta<typeof CustomAvatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    userName: 'Ilya MuhamorovD',
  },
}
