import { ComponentPropsWithoutRef, CSSProperties, ElementRef, forwardRef, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { clsx } from 'clsx'

import s from './dropdown.module.scss'

type DropdownProps = {
  trigger?: ReactNode
  className?: string
  style?: CSSProperties
  align?: 'start' | 'center' | 'end'
} & ComponentPropsWithoutRef<typeof DropdownMenu.Content>

export const CustomDropdown = forwardRef<ElementRef<typeof DropdownMenu.Trigger>, DropdownProps>(
  (props: DropdownProps, ref) => {
    const { className, align, trigger, style, children, ...restProps } = props

    const classNames = {
      content: clsx(s.DropdownMenuContent, className),
      arrow: clsx(s.DropdownMenuArrow),
      trigger: clsx(s.trigger),
    }

    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className={classNames.trigger} ref={ref} asChild>
          {trigger ? trigger : <HamburgerMenuIcon />}
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className={classNames.content}
            style={style}
            loop
            align={align}
            sideOffset={5}
            {...restProps}
          >
            {children}
            <DropdownMenu.Arrow className={classNames.arrow} />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    )
  }
)

type DropdownMenuItemType = {
  disabled?: boolean
  className?: string
} & ComponentPropsWithoutRef<typeof DropdownMenu.Item>

export const DropdownMenuItem = forwardRef<
  ElementRef<typeof DropdownMenu.Item>,
  DropdownMenuItemType
>(({ children, className, ...props }: DropdownMenuItemType, forwardedRef) => {
  const classNames = {
    item: clsx(s.DropdownMenuItem, className),
    separator: clsx(s.DropdownMenuSeparator),
  }

  return (
    <DropdownMenu.Item className={classNames.item} {...props} ref={forwardedRef}>
      {children}
    </DropdownMenu.Item>
  )
})
