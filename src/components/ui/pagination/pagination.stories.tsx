import { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './pagination.tsx'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    return (
      <div>
        <Pagination />
      </div>
    )
  },
  args: {},
}
