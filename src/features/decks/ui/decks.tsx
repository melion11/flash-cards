import s from './decks.module.scss'

import { TrashIcon } from '@/assets'
import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, RadioSlider, TabsSwitcher, TextField, Typography } from '@components/ui'

type DecksProps = {}

export const Decks = (props: DecksProps) => {
  const {} = props

  return (
    <div className={s.root}>
      <div className={s.headerWrapper}>
        <Typography variant={TypographyVariant.Large}>Decks</Typography>
        <Button>Add New Deck</Button>
      </div>
      <div className={s.panelWrapper}>
        <div>
          <TextField search />
        </div>
        <div>
          <TabsSwitcher
            label={'Show packs cards'}
            tabs={[
              { label: 'My Cards', value: 'my' },
              { label: 'All Cards', value: 'all' },
            ]}
          />
        </div>
        <RadioSlider value={[0, 100]} />
        <Button variant={ButtonVariant.Secondary}>
          <TrashIcon /> Clear Filter
        </Button>
      </div>
    </div>
  )
}
