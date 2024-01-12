import { ComponentPropsWithoutRef, CSSProperties, ElementRef, forwardRef } from 'react'

import * as Slider from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import s from './radioSlider.module.scss'

type RadioSliderProps = {
  onChange?: (value: number[]) => void
  className?: string
  style?: CSSProperties
} & ComponentPropsWithoutRef<typeof Slider.Root>
export const RadioSlider = forwardRef<ElementRef<typeof Slider.Root>, RadioSliderProps>(
  (props: RadioSliderProps, ref) => {
    const { defaultValue, className, onValueChange, max, min, value, step, ...restProps } = props

    const classNames = {
      root: clsx(s.sliderWrapper, className),
    }

    return (
      <div className={classNames.root}>
        {value && <span className={s.sliderValue}>{value[0]}</span>}
        <Slider.Root
          className={s.SliderRoot}
          ref={ref}
          onValueChange={onValueChange}
          defaultValue={defaultValue}
          value={value}
          min={min}
          max={max}
          step={step}
          {...restProps}
        >
          <Slider.Track className={s.SliderTrack}>
            <Slider.Range className={s.SliderRange} />
          </Slider.Track>
          <Slider.Thumb className={s.SliderThumb} />
          <Slider.Thumb className={s.SliderThumb} />
        </Slider.Root>
        {value && <span className={s.sliderValue}>{value[1]}</span>}
      </div>
    )
  }
)
