import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  ReactNode,
  useRef,
} from 'react'

import { clsx } from 'clsx'

import { Button } from '../button'

import s from './fileLoader.module.scss'

export type FileLoaderProps = {
  title?: string
  icon?: ReactNode
  onChangeFile?: (file: File) => void
} & ComponentPropsWithoutRef<'div'>

export const FileLoader = forwardRef<ElementRef<'div'>, FileLoaderProps>((props, ref) => {
  const { title, onChangeFile, className, icon, ...restProps } = props

  const fileRef = useRef<HTMLInputElement>(null)

  const onChangeFileHandler = () => {
    if (fileRef.current) {
      fileRef.current.click()
    }
  }
  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onChangeFile?.(e.target.files?.[0])
    }
  }

  const classNames = {
    root: clsx(s.inputWrapper, className),
  }

  return (
    <div className={classNames.root} {...restProps} ref={ref}>
      <input
        ref={fileRef}
        name={'file'}
        id={'input_file'}
        onChange={uploadHandler}
        className={s.inputFile}
        type={'file'}
      />
      <label className={s.inputLabel} htmlFor="input_file">
        <Button onClick={onChangeFileHandler} variant={'secondary'} className={s.iconWrapper}>
          {icon}
          {title}
        </Button>
      </label>
    </div>
  )
})
