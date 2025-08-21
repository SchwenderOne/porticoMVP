import type { Meta, StoryObj } from '@storybook/react'
import ZoomBar from './ZoomBar'

const meta: Meta<typeof ZoomBar> = {
  title: 'Widgets/ZoomBar',
  component: ZoomBar,
}
export default meta

export const Default: StoryObj<typeof ZoomBar> = {
  args: {},
}
