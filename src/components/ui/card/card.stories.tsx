import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Typography } from '../typography'

import { Card } from './card.tsx'

const meta = {
  title: 'components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <Typography variant={'h2'}>Login In</Typography>
        <Button variant={'primary'} fullWidth={false} onClick={() => {}}>
          Button
        </Button>
      </>
    ),
  },
}
