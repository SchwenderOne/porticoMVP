import type { Meta, StoryObj } from '@storybook/react'
import ZoomBar from './ZoomBar'

const meta: Meta<typeof ZoomBar> = {
  title: 'Widgets/ZoomBar',
  component: ZoomBar,
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 1, step: 0.05 } },
    onChange: { action: 'changed' },
    ariaLabel: { control: 'text' },
  },
}
export default meta

export const Default: StoryObj<typeof ZoomBar> = {
  args: { value: 0.65 },
}
