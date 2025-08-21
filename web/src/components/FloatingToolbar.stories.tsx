import type { Meta, StoryObj } from '@storybook/react'
import FloatingToolbar from './FloatingToolbar'

const meta: Meta<typeof FloatingToolbar> = {
  title: 'Core/FloatingToolbar',
  component: FloatingToolbar,
}
export default meta

export const Default: StoryObj<typeof FloatingToolbar> = {
  args: {},
}
