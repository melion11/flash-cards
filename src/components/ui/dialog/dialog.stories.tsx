import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'

import { DialogModal, DialogModalProps } from './dialog.tsx'

const meta = {
  title: 'Components/DialogModal',
  component: DialogModal,
  tags: ['autodocs'],
} satisfies Meta<typeof DialogModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: DialogModalProps) => {
    const [open, setOpen] = useState(false)
    const onOpenDialog = (open: boolean) => {
      setOpen(open)
    }

    return (
      <div>
        <DialogModal {...args} open={open} setOpen={onOpenDialog} />
      </div>
    )
  },
  args: {
    children: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi culpa debitis
        dolores, eligendi error eum illo libero maxime officia optio quia quo sapiente, sed soluta
        tempora tempore totam vitae?
      </div>
    ),
    trigger: <Button>Edit profile</Button>,
    actionTitle: 'Save Changes',
  },
}

export const DialogWithTitle: Story = {
  render: (args: DialogModalProps) => {
    const [open, setOpen] = useState(false)
    const onOpenDialog = (open: boolean) => {
      setOpen(open)
    }

    const onActionHandler = () => {
      console.log('pack deleted')
    }

    return (
      <div>
        <DialogModal {...args} open={open} setOpen={onOpenDialog} onAction={onActionHandler}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi culpa debitis
            dolores, eligendi error eum illo libero maxime officia optio quia quo sapiente, sed
            soluta tempora tempore totam vitae?
          </div>
        </DialogModal>
      </div>
    )
  },
  args: {
    title: 'Delete Pack',
    trigger: <Button>Delete Pack</Button>,
    actionTitle: 'Delete Pack',
    footerButtons: true,
  },
}
