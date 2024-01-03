import type { Meta } from '@storybook/react'

import { Rating } from './rating.tsx'

const meta = {
  title: 'Components/Feedback/Rating',
  component: Rating,
  tags: ['autodocs'],
} satisfies Meta<typeof Rating>

export default meta

export const Default = {
  args: {
    grade: 3,
  },
}
