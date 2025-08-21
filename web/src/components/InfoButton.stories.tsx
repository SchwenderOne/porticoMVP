import type { Meta, StoryObj } from '@storybook/react'
import InfoButton from './InfoButton'

const meta: Meta<typeof InfoButton> = {
  title: 'Widgets/InfoButton',
  component: InfoButton,
}
export default meta

export const Default: StoryObj<typeof InfoButton> = {
  args: {},
}
