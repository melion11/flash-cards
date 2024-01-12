import { useMemo, useState } from 'react'

import s from './decks-page.module.scss'

import { TrashIcon } from '@/assets'
import { ButtonVariant, TypographyVariant } from '@/common'
import {
  Button,
  Page,
  Pagination,
  RadioSlider,
  SelectOption,
  TabsSwitcher,
  TextField,
  Typography,
} from '@components/ui'
import { PageLoader } from '@components/ui/page-loader'
import { Sort } from '@components/ui/table/table-header'
import { useGetDecksQuery } from '@features/decks'
import { DecksTable } from '@features/decks/ui/decks-table/decks-table.tsx'

export const DecksPage = () => {
  const [sort, setSort] = useState<Sort>(null)

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const sortedString = useMemo(() => {
    if (!sort) return null

    return `${sort.key}-${sort.direction}`
  }, [sort])

  console.log(sortedString)

  const { data, isLoading, isFetching } = useGetDecksQuery()

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

  const loadingStatus = isLoading || isFetching

  return (
    <>
      {loadingStatus && <PageLoader linear className={s.pageLoader} />}
      <Page className={s.root}>
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

        <DecksTable data={data?.items} sort={sort} setSort={setSort} />

        <Pagination
          showPerPageSelect
          totalCount={500}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onChangePage={onChangePage}
          options={options}
          onChangeSize={onChangeSizeHandler}
        />
      </Page>
    </>
  )
}
