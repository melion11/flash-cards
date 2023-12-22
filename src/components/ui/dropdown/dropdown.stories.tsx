import { Meta, StoryObj } from '@storybook/react'

import { Logout } from '../../../assets'
import { CustomAvatar } from '../avatar/avatar.tsx'

import { CustomDropdown, DropdownMenuItem } from './dropdown.tsx'

const meta = {
  title: 'Components/Dropdown',
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
    // items: [
    //   {
    //     id: '1',
    //     title: 'LogOut',
    //     icon: <Logout />,
    //     disabled: false,
    //   },
    // ],
    align: 'end',
    children: (
      <div style={{ display: 'flex', gap: '5px' }}>
        <CustomAvatar />
        <div>
          <span>userName</span>
          <span>email: gpfpgpgp@mail.ru</span>
        </div>
      </div>
    ),
    trigger: <CustomAvatar userName={'Ilya Malav'} />,
  },
}
