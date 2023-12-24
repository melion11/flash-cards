import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'

import { CloseIcon } from '../../../assets'
import { Button } from '../button'
import { Typography } from '../typography'

import s from './dialog.module.scss'
import { dialogAnimations } from './dialogWindowAnimations.ts'

export type DialogModalProps = {
  open?: boolean
  setOpen?: (open: boolean) => void
  title?: string
  trigger?: ReactNode
  actionTitle?: string
  onAction?: () => void
  footerButtons?: boolean
} & ComponentPropsWithoutRef<typeof Dialog.Root>

export const DialogModal = forwardRef<ElementRef<typeof Dialog.Trigger>, DialogModalProps>(
  (props: DialogModalProps, ref) => {
    const {
      children,
      trigger,
      open,
      actionTitle,
      onAction,
      setOpen,
      footerButtons,
      title,
      ...restProps
    } = props

    const classNames = {
      overlay: s.DialogOverlay,
      content: s.DialogContent,
      closeIcon: s.IconButton,
    }

    const onActionHandler = () => {
      onAction?.()
    }

    return (
      <Dialog.Root open={open} onOpenChange={setOpen} {...restProps}>
        <Dialog.Trigger ref={ref} asChild>
          {trigger}
        </Dialog.Trigger>
        <AnimatePresence>
          {open && (
            <Dialog.Portal forceMount>
              <motion.div {...dialogAnimations.overlay}>
                <Dialog.Overlay className={classNames.overlay} forceMount />
              </motion.div>
              <Dialog.Content className={classNames.content} forceMount>
                <motion.div {...dialogAnimations.window}>
                  {title && (
                    <div className={s.DialogHeader}>
                      <Dialog.Title asChild>
                        <Typography as={'h2'} variant={'h2'}>
                          {title}
                        </Typography>
                      </Dialog.Title>
                      <Dialog.Close asChild>
                        <button className={classNames.closeIcon}>
                          <CloseIcon />
                        </button>
                      </Dialog.Close>
                    </div>
                  )}
                  <div className={s.ContentWrapper}>{children}</div>
                  {footerButtons && (
                    <div className={s.FooterWrapper}>
                      <Dialog.Close asChild>
                        <Button variant={'secondary'}>Cancel</Button>
                      </Dialog.Close>
                      <Dialog.Close asChild>
                        <Button onClick={onActionHandler}>{actionTitle}</Button>
                      </Dialog.Close>
                    </div>
                  )}
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    )
  }
)
