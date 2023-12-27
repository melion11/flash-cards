import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { FileIcon } from '../../../assets'

import { FileLoader, FileLoaderProps } from './fileLoader.tsx'

const meta = {
  title: 'Components/FileLoader',
  component: FileLoader,
  tags: ['autodocs'],
  parameters: {},
} satisfies Meta<typeof FileLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: FileLoaderProps) => {
    const [currentFile, setCurrentFile] = useState<File | null>(null)
    const onChangeFile = (currentFile: File) => {
      setCurrentFile(currentFile)

      const reader = new FileReader()

      reader.onload = e => {
        // Get the URL or base64 string from the reader's result
        const fileDataURL = e.target?.result
        // Do something with the fileDataURL (e.g., save it to state or display it)
      }
      reader.readAsDataURL(currentFile)
    }

    return (
      <div>
        <FileLoader {...args} onChangeFile={onChangeFile} />
        <p>Current file: {currentFile?.name}</p>
        {currentFile && currentFile.type.startsWith('image/') && (
          <img src={URL.createObjectURL(currentFile)} alt="file" />
        )}
      </div>
    )
  },
  args: {
    icon: <FileIcon />,
    title: 'Change cover',
  },
}
