import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'

import { PageLoader } from './page-loader.tsx'

const meta = {
  title: 'components/PageLoader',
  component: PageLoader,
  tags: ['autodocs'],
} satisfies Meta<typeof PageLoader>

export default meta
type Story = StoryObj<typeof meta>

export const CircleLoader: Story = {
  args: {
    circle: true,
  },
}

export const LinearLoader: Story = {
  render: () => {
    const [isLoading, setIsLoading] = useState(false)

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          height: 'min-content',
          position: 'relative',
        }}
      >
        {isLoading && <PageLoader linear />}
        <div style={{ marginTop: '20px' }}>Header</div>
        <Button onClick={() => setIsLoading(!isLoading)}>Loading</Button>
      </div>
    )
  },
}
