import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ViewBar from '../ViewBar'

describe('ViewBar', () => {
  it('renders buttons with aria-pressed state', () => {
    render(<ViewBar value="grid" />)
    const btnGrid = screen.getByRole('button', { name: /square grid view/i })
    const btnDots = screen.getByRole('button', { name: /dot grid view/i })
    expect(btnGrid).toHaveAttribute('aria-pressed', 'true')
    expect(btnDots).toHaveAttribute('aria-pressed', 'false')
  })

  it('invokes onChange when selecting a different view', async () => {
    const user = userEvent.setup()
    let current: 'grid' | 'dots' | 'basic' = 'grid'
    const onChange = (v: 'grid' | 'dots' | 'basic') => { current = v }
    render(<ViewBar value={current} onChange={onChange} />)
    const btnDots = screen.getByRole('button', { name: /dot grid view/i })
    await user.click(btnDots)
    expect(current).toBe('dots')
  })
})


