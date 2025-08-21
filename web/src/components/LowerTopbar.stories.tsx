import type { Meta, StoryObj } from '@storybook/react'
import LowerTopbar from './LowerTopbar'

const meta: Meta<typeof LowerTopbar> = {
  title: 'Core/LowerTopbar',
  component: LowerTopbar,
}
export default meta

export const Default: StoryObj<typeof LowerTopbar> = {
  args: {},
}
