import type { Meta, StoryObj } from '@storybook/react'

import { Logout } from '../../../assets'
import { Typography } from '../typography'

import { Button } from './button.tsx'

const meta = {
  title: 'Components/Data Entry/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: <Typography variant={'subtitle2'}>Button primary</Typography>,
    disabled: false,
    fullWidth: false,
  },
}

export const PrimaryWithIcon: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    fullWidth: false,
    children: (
      <>
        <Logout />
        <Typography variant={'subtitle2'}>Button primary</Typography>
      </>
    ),
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    disabled: false,
    fullWidth: false,
    children: <Typography variant={'subtitle2'}>Button secondary</Typography>,
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    disabled: false,
    fullWidth: false,
    children: 'Link-button',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    disabled: false,
    fullWidth: false,
    children: (
      <Typography style={{ color: 'var(--color-accent-500)' }} variant={'subtitle2'}>
        Tertiary
      </Typography>
    ),
  },
}

export const PrimarySecondary: Story = {
  args: {
    variant: 'secondary',
    disabled: false,
    fullWidth: false,
    children: (
      <>
        <Logout />
        <Typography variant={'subtitle2'}>Button primary</Typography>
      </>
    ),
  },
}
