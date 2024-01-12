import { Column } from '@components/ui/table/table-header'

const columnsPrimitives: Column[] = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'created',
    title: 'Created by',
  },
]

export const columns: Column[] = [
  ...columnsPrimitives,
  {
    key: 'icons',
    title: '',
  },
]
