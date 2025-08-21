import type { Meta, StoryObj } from '@storybook/react'
import Topbar from './Topbar'

const meta: Meta<typeof Topbar> = {
  title: 'Core/Topbar',
  component: Topbar,
}
export default meta

export const Default: StoryObj<typeof Topbar> = {
  args: {},
}
