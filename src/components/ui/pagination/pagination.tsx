import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import { ArrowLeft, ArrowRight } from '../../../assets'
import { CustomSelect, SelectOption } from '../select'
import { Typography } from '../typography'

import s from './pagination.module.scss'
import { usePagination } from './usePagination.ts'

export type PaginationProps = {
  totalCount: number
  itemsPerPage: number
  currentPage: number
  siblingCount?: number
  options?: SelectOption[]
  onChangeSize?: (pageSize: number) => void
  onChangePage?: (currentPage: number | string) => void
} & ComponentPropsWithoutRef<'div'>

export const Pagination = forwardRef<ElementRef<'div'>, PaginationProps>(
  (props: PaginationProps, ref, ...restProps) => {
    const {
      totalCount,
      options,
      onChangeSize,
      siblingCount = 1,
      itemsPerPage,
      currentPage,
      onChangePage,
    } = props
    const pagesCount = Math.ceil(totalCount / itemsPerPage)

    const pageNumbers = usePagination({ totalPageCount: pagesCount, currentPage, siblingCount })

    const onChangePageHandler = (currentPage: number | string) => {
      onChangePage?.(currentPage)
    }

    const onChangeLeftPageHandler = () => {
      if (currentPage > 1) onChangePage?.(currentPage - 1)
    }

    const onChangeRightPageHandler = () => {
      if (currentPage < pagesCount) onChangePage?.(currentPage + 1)
    }

    const onChangeSizeHandler = (pageSize: string) => {
      onChangeSize?.(+pageSize)
    }

    const classNames = {
      root: s.Root,
      paginationWrapper: s.paginationWrapper,
      pagesWrapper: s.pagesWrapper,
      prevBtn: clsx(s.btn),
      nextBtn: clsx(s.btn),
    }

    return (
      <div className={classNames.root} {...restProps} ref={ref}>
        <div className={classNames.paginationWrapper}>
          <button
            disabled={currentPage === 1}
            onClick={onChangeLeftPageHandler}
            className={classNames.prevBtn}
            tabIndex={0}
          >
            <ArrowLeft />
          </button>
          <div className={classNames.pagesWrapper}>
            {pageNumbers.map((page, i) => {
              return (
                <button
                  onClick={() => onChangePageHandler(page)}
                  key={i}
                  tabIndex={0}
                  className={`${s.page} 
                ${page === currentPage ? s.active : ''} 
                ${page === '...' ? s.dots : s.page}`}
                  disabled={page === '...'}
                >
                  {page}
                </button>
              )
            })}
          </div>
          <button
            disabled={currentPage === pagesCount}
            tabIndex={0}
            onClick={onChangeRightPageHandler}
            className={classNames.nextBtn}
          >
            <ArrowRight />
          </button>
        </div>
        <div className={s.selectWrapper}>
          <Typography as={'span'} variant={'body2'} className={s.selectText}>
            Show
          </Typography>
          <CustomSelect
            className={s.select}
            value={itemsPerPage.toString()}
            options={options}
            onValueChange={onChangeSizeHandler}
          />
          <Typography as={'span'} variant={'body2'} className={s.selectText}>
            on the page
          </Typography>
        </div>
      </div>
    )
  }
)

// export function App(props) {
//   const [state, setState] = useState(0)
//
//   console.log(1)
//
//   useEffect(() => {
//     const timer = setTimeout(() => console.log(2), 0)
//
//     new Promise((resolve, reject) => {
//       console.log(3)
//       resolve(1)
//     }).then(res => console.log(4))
//     console.log(5)
//     setState(1)
//
//     return () => {
//       console.log(6)
//       clearTimeout(timer)
//     }
//   }, [])
//
//   useLayoutEffect(() => {
//     console.log(7)
//
//     return () => {
//       console.log(8)
//     }
//   }, [])
//
//   new Promise((resolve, reject) => {
//     console.log(9)
//     resolve(1)
//   })
//     .then(res => console.log(10))
//     .finally(() => console.log(11))
//
//   return (
//     <div className="App">
//       <h1>Hello React</h1>
//     </div>
//   )
// }
