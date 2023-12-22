import { Meta, StoryObj } from '@storybook/react'

import { TabsSwitcher } from './tab-switcher'

const meta = {
  title: 'Components/TabsSwitcher',
  component: TabsSwitcher,
  tags: ['autodocs'],
} satisfies Meta<typeof TabsSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tabs: [
      { label: 'My Cards', value: '1', disabled: false },
      { label: 'All Cards', value: '2', disabled: false },
      { label: 'Card', value: '3', disabled: true },
      { label: 'Card111', value: '4', disabled: false },
    ],
    label: 'Tab Switcher',
  },
}
