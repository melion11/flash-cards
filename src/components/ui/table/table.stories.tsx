import type { Meta } from '@storybook/react'

import { Table } from './table.tsx'

const meta = {
  title: 'components/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta

export const Default = {
  args: {},
}
