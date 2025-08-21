import type { Meta, StoryObj } from '@storybook/react'
import ViewBar from './ViewBar'

const meta: Meta<typeof ViewBar> = {
  title: 'Widgets/ViewBar',
  component: ViewBar,
}
export default meta

export const Default: StoryObj<typeof ViewBar> = {
  args: {},
}
