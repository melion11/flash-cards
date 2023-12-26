import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import s from './pagination.module.scss'

export type PaginationProps = {
  totalCount: number
  itemsPerPage: number
  currentPage: number
  onChangePage?: (currentPage: number) => void
} & ComponentPropsWithoutRef<'div'>

export const Pagination = forwardRef<ElementRef<'div'>, PaginationProps>(
  (props: PaginationProps, ref, ...restProps) => {
    const { totalCount, itemsPerPage, currentPage, onChangePage } = props

    const pages = Math.floor(totalCount / itemsPerPage)

    const pagesArray: number[] = []

    for (let i = 1; i <= pages; i++) {
      pagesArray.push(i)
    }

    const onChangePageHandler = (currentPage: number) => {
      onChangePage?.(currentPage)
    }

    const onChangeLeftPageHandler = () => {
      if (currentPage === 1) {
        onChangePage?.(currentPage)
      } else {
        onChangePage?.(currentPage - 1)
      }
    }

    const onChangeRightPageHandler = () => {
      if (currentPage >= pagesArray.length - 1) {
        onChangePage?.(currentPage)
      } else {
        onChangePage?.(currentPage + 1)
      }
    }

    return (
      <div
        className={s.Root}
        {...restProps}
        ref={ref}
        style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
      >
        <button onClick={onChangeLeftPageHandler} style={{ cursor: 'pointer' }}>
          {'<'}
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px', cursor: 'pointer' }}>
          {pagesArray.map(page => {
            return (
              <button
                onClick={() => onChangePageHandler(page)}
                key={page}
                className={page === currentPage ? s.active : ''}
              >
                {page}
              </button>
            )
          })}
        </div>
        <button onClick={onChangeRightPageHandler} style={{ cursor: 'pointer' }}>
          {'>'}
        </button>
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

// import { FC } from "react";
// import "./styles.css";
//
// // Описать типы при необходимости
// type SliderPropertyType = {
//   data: number[];
// };
//
// // Задачу выполнить максимально правильно,
// // учитывая все мелочи, но без верстки
// // но без дополнительных библиотек, например без Redux.
//
// // Реализовать слайдер:
// // 1. Слайдер должен показывать текущий слайд,
// // можно поворачивать слайдер налево и направо,
// // при достижении границы массива (первый или последний),
// // нужно перевести текущий слайд в противоположный конец.
// // 2. Сделать кнопки старт и стоп,
// // которые запустят автоматическую прокрутку слайдера вправо,
// // или остановят ее.
//
// const Slider: FC<SliderPropertyType> = ({ data }) => {
//   return (
//       <div className="Slider">
//         <button>turn left</button>
//
//         <div className="Items">
//           <span className="Item">item1</span>
//           <span className="Item">item2</span>
//           <span className="Item">item3</span>
//         </div>
//
//         <button>turn right</button>
//       </div>
//   );
// };
//
// export default function App() {
//   const data = new Array(5).fill(null).map((_, index) => index + 1);
//
//   return (
//       <div className="Wrapper">
//         {/* Отобразить текущий слайд */}
//         <div>Текущий слайд</div>
//
//         <Slider data={data} />
//
//         {/* Реализовать Кнопку Start,
//           должна запускаться карусель направо,
//           раз в 1 секунду, при кнопке Stop, карусель должна
//           остановится
//       */}
//         <div className="Buttons">
//           <button className="Button">start</button>
//           <button className="Button">stop</button>
//         </div>
//       </div>
//   );
// }
