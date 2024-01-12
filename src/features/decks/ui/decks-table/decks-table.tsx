import s from './decks-table.module.scss'

import { EditIcon, PlayIcon, TrashIcon } from '@/assets'
import { TypographyVariant } from '@/common'
import { Table, Typography } from '@components/ui'
import { Column, Sort, TableHeader } from '@components/ui/table/table-header'
import { GetDecksDataItems } from '@features/decks/model/api/decks-api.types.ts'
import { columns } from '@features/decks/ui/decks-table/columns-data.ts'

type DecksTableProps = {
  data?: GetDecksDataItems[]
  sort?: Sort
  setSort?: (value: Sort) => void
}

export const DecksTable = (props: DecksTableProps) => {
  const { data, setSort, sort } = props

  const columnsSortable: Column[] = columns.map(column =>
    column.key !== 'icons' ? { ...column, sortable: true } : column
  )

  const decksList = data?.map(item => {
    return (
      <Table.Row key={item.id}>
        <Table.Cell>
          <Typography variant={TypographyVariant.Body2}>{item.name}</Typography>
        </Table.Cell>
        <Table.Cell>
          <Typography variant={TypographyVariant.Body2}>{item.cardsCount}</Typography>
        </Table.Cell>
        <Table.Cell>
          <Typography variant={TypographyVariant.Body2}>
            {new Date(item.updated).toLocaleDateString()}
          </Typography>
        </Table.Cell>
        <Table.Cell>
          <Typography variant={TypographyVariant.Body2}>{item.author.name}</Typography>
        </Table.Cell>
        <Table.Cell className={s.iconsWrapper}>
          <PlayIcon />
          <EditIcon />
          <TrashIcon />
        </Table.Cell>
      </Table.Row>
    )
  })

  return (
    <Table.Root className={s.tableRoot}>
      <TableHeader columns={columnsSortable} sort={sort} onSort={setSort} />
      <Table.Body>{decksList}</Table.Body>
    </Table.Root>
  )
}
