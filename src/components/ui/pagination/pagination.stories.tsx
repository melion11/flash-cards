import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { SelectOption } from '../select'

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
    const [itemsPerPage, setItemsPerPage] = useState(10)

    const options: SelectOption[] = [
      { name: '10', value: '10' },
      { name: '20', value: '20' },
      { name: '30', value: '30' },
      { name: '40', value: '40' },
      { name: '50', value: '50' },
    ]

    const onChangePage = (currentPage: number | string) => {
      setCurrentPage(+currentPage)
    }

    const onChangeSizeHandler = (pageSize: number) => {
      setItemsPerPage(pageSize)
    }

    return (
      <div>
        <Pagination
          {...args}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onChangePage={onChangePage}
          options={options}
          onChangeSize={onChangeSizeHandler}
        />
        <p>Current page: {currentPage}</p>
      </div>
    )
  },
  args: {
    totalCount: 500,
    currentPage: 1,
    itemsPerPage: 10,
  },
}
