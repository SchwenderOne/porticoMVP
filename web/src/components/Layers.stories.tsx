import type { Meta, StoryObj } from '@storybook/react'
import Layers from './Layers'

const meta: Meta<typeof Layers> = {
  title: 'Widgets/Layers',
  component: Layers,
}
export default meta

export const Default: StoryObj<typeof Layers> = {
  args: {},
}
