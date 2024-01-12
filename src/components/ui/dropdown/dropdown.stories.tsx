import { Meta, StoryObj } from '@storybook/react'

import { Logout } from '../../../assets'
import { CustomAvatar } from '../avatar/avatar.tsx'

import { CustomDropdown, DropdownMenuItem, DropdownMenuLabel } from './dropdown.tsx'

const meta = {
  title: 'Components/Disclosure/Dropdown',
  component: CustomDropdown,
  tags: ['autodocs'],
  parameters: {},
} satisfies Meta<typeof CustomDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    align: 'end',
    children: (
      <>
        <DropdownMenuItem>
          <Logout /> LogOut
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Logout /> LogOut
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Logout /> LogOut
        </DropdownMenuItem>
      </>
    ),
  },
}

export const DefaultWithImage: Story = {
  args: {
    align: 'end',
    children: (
      <>
        <DropdownMenuLabel style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <CustomAvatar />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <span>userName</span>
            <span>email: gpfpgpgp@mail.ru</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <Logout /> LogOut
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Logout /> LogOut
        </DropdownMenuItem>
      </>
    ),
    trigger: <CustomAvatar style={{ cursor: 'pointer' }} username={'Ilya Malav'} />,
  },
}
