import type { Meta, StoryObj } from '@storybook/react'
import ViewBar from './ViewBar'

const meta: Meta<typeof ViewBar> = {
  title: 'Widgets/ViewBar',
  component: ViewBar,
  argTypes: {
    value: { control: { type: 'inline-radio' }, options: ['grid', 'dots', 'basic'] },
    onChange: { action: 'changed' },
    ariaLabel: { control: 'text' },
  },
}
export default meta

export const Default: StoryObj<typeof ViewBar> = {
  args: { value: 'grid' },
}
