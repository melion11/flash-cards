import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { EmptyStar, Star } from '../../../assets'

import s from './rating.module.scss'

type RatingProps = {
  grade: number
  maxRating?: number
} & ComponentPropsWithoutRef<'div'>

export const Rating = forwardRef<ElementRef<'div'>, RatingProps>((props, ref) => {
  const { grade, maxRating = 5, ...restProps } = props

  const stars = [...Array(maxRating)].map((_, index) => index + 1)

  return (
    <div className={s.Root} {...restProps} ref={ref}>
      {stars.map((star, index) => {
        return grade >= star ? (
          <Star key={index} className={s.star} />
        ) : (
          <EmptyStar key={index} className={s.star} />
        )
      })}
    </div>
  )
})
