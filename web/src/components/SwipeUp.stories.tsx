import type { Meta, StoryObj } from '@storybook/react'
import SwipeUp from './SwipeUp'

const meta: Meta<typeof SwipeUp> = {
  title: 'Widgets/SwipeUp',
  component: SwipeUp,
}
export default meta

export const Default: StoryObj<typeof SwipeUp> = {
  args: {},
}
