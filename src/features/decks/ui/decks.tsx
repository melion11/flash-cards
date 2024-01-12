import { useMemo, useState } from 'react'

import s from './decks.module.scss'

import { EditIcon, PlayIcon, TrashIcon } from '@/assets'
import { ButtonVariant, TypographyVariant } from '@/common'
import {
  Button,
  Pagination,
  RadioSlider,
  SelectOption,
  Table,
  TabsSwitcher,
  TextField,
  Typography,
} from '@components/ui'
import { Column, Sort, TableHeader } from '@components/ui/table/table-header'

type DecksProps = {}

const data = [
  {
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
  },
  {
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
  },
  {
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
  },
  {
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
  },
  {
    title: 'Project E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
  },
]

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

const columns: Column[] = [
  ...columnsPrimitives,
  {
    key: 'icons',
    title: '',
  },
]

export const Decks = (props: DecksProps) => {
  const {} = props

  const columnsSortable: Column[] = columns.map(column =>
    column.key !== 'icons' ? { ...column, sortable: true } : column
  )
  const [sort, setSort] = useState<Sort>(null)

  const sortedString = useMemo(() => {
    if (!sort) return null

    return `${sort.key}-${sort.direction}`
  }, [sort])

  console.log(sortedString)

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
    <div className={s.root}>
      <div className={s.headerWrapper}>
        <Typography variant={TypographyVariant.Large}>Decks</Typography>
        <Button>Add New Deck</Button>
      </div>
      <div className={s.panelWrapper}>
        <TextField className={s.searchInput} search />
        <TabsSwitcher
          className={s.tabs}
          label={'Show packs cards'}
          tabs={[
            { label: 'My Cards', value: 'my' },
            { label: 'All Cards', value: 'all' },
          ]}
        />
        <RadioSlider className={s.radioSlider} value={[0, 50]} />

        <Button className={s.clearFilterBtn} variant={ButtonVariant.Secondary}>
          <TrashIcon /> Clear Filter
        </Button>
      </div>

      <Table.Root className={s.tableRoot}>
        <TableHeader columns={columnsSortable} sort={sort} onSort={setSort} />
        <Table.Body>
          {data.map(item => (
            <Table.Row key={item.title}>
              <Table.Cell>
                <Typography variant={TypographyVariant.Body2}>{item.title}</Typography>
              </Table.Cell>
              <Table.Cell>
                <Typography variant={TypographyVariant.Body2}>{item.cardsCount}</Typography>
              </Table.Cell>
              <Table.Cell>
                <Typography variant={TypographyVariant.Body2}>{item.updated}</Typography>
              </Table.Cell>
              <Table.Cell>
                <Typography variant={TypographyVariant.Body2}>{item.createdBy}</Typography>
              </Table.Cell>
              <Table.Cell className={s.iconsWrapper}>
                <PlayIcon />
                <EditIcon />
                <TrashIcon />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Pagination
        showPerPageSelect
        totalCount={500}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onChangePage={onChangePage}
        options={options}
        onChangeSize={onChangeSizeHandler}
      />
    </div>
  )
}
