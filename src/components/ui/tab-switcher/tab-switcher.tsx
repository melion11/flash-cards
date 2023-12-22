import { ComponentPropsWithoutRef, CSSProperties, ElementRef, forwardRef } from 'react'

import * as Tabs from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import { Typography } from '../typography'

import s from './tab-switcher.module.scss'

export type SwitchOption = {
  label: string
  value: string
  disabled?: boolean
}

type TabSwitcher = {
  className?: string
  style?: CSSProperties
  tabs: SwitchOption[]
  label?: string
} & ComponentPropsWithoutRef<typeof Tabs.Root>

export const TabsSwitcher = forwardRef<ElementRef<typeof Tabs.Root>, TabSwitcher>(
  (props: TabSwitcher, ref) => {
    const { tabs, style, label, onValueChange, value, defaultValue, className, ...restProps } =
      props

    const classNames = {
      tabTrigger: clsx(s.tabsTrigger),
      tabsList: clsx(s.tabsList),
    }

    const tabsJSX = tabs.map(tab => {
      return (
        <Tabs.Trigger
          key={tab.value}
          className={classNames.tabTrigger}
          value={tab.value}
          disabled={tab.disabled}
        >
          {tab.label}
        </Tabs.Trigger>
      )
    })

    return (
      <Tabs.Root
        ref={ref}
        onValueChange={onValueChange}
        value={value}
        className={s.tabsRoot}
        defaultValue={defaultValue}
        {...restProps}
      >
        <Typography variant={'body2'}>{label}</Typography>
        <Tabs.List className={classNames.tabsList} aria-label="Manage your account">
          {tabsJSX}
        </Tabs.List>
      </Tabs.Root>
    )
  }
)
