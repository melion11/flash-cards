import { Logout, ProfileIcon } from '../../../../assets'
import { CustomAvatar } from '../../avatar/avatar.tsx'
import { CustomDropdown, DropdownMenuItem, DropdownMenuLabel } from '../../dropdown'
import { Typography } from '../../typography'

import s from './headerMenu.module.scss'

export const HeaderMenu = () => {
  return (
    <div className={s.dropDownWrapper}>
      <Typography className={s.username} as={'span'} variant={'subtitle1'}>
        Ivan
      </Typography>
      <CustomDropdown trigger={<CustomAvatar />}>
        <DropdownMenuLabel className={s.dropDownMenuLabel}>
          <CustomAvatar />
          <div className={s.userInfoWrapper}>
            <Typography as={'span'} variant={'subtitle2'}>
              Ivan
            </Typography>
            <Typography className={s.email} as={'span'} variant={'caption'}>
              j&johnson@gmail.com
            </Typography>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <ProfileIcon />
          <Typography as={'span'} variant={'caption'}>
            My profile
          </Typography>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Logout />{' '}
          <Typography as={'span'} variant={'caption'}>
            Sign Out
          </Typography>
        </DropdownMenuItem>
      </CustomDropdown>
    </div>
  )
}
