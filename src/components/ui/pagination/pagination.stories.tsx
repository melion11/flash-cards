import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Pagination, PaginationProps } from './pagination.tsx'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState(1)

    const onChangePage = (currentPage: number) => {
      setCurrentPage(currentPage)
    }

    return (
      <div>
        <Pagination {...args} currentPage={currentPage} onChangePage={onChangePage} />
        <p>Current page: {currentPage}</p>
      </div>
    )
  },
  args: {
    totalCount: 500,
    itemsPerPage: 10,
  },
}
