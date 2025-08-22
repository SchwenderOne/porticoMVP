import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ZoomBar from '../ZoomBar'

describe('ZoomBar', () => {
  it('renders slider with aria attributes', () => {
    render(<div style={{ width: 315 }}><ZoomBar value={0.5} /></div>)
    const slider = screen.getByRole('slider', { name: /zoom/i })
    expect(slider).toBeInTheDocument()
    expect(slider).toHaveAttribute('aria-valuemin', '0')
    expect(slider).toHaveAttribute('aria-valuemax', '100')
    expect(slider).toHaveAttribute('aria-valuenow', '50')
  })

  it('responds to keyboard arrows', async () => {
    const user = userEvent.setup()
    let current = 0.3
    const onChange = (v: number) => { current = v }
    render(<div style={{ width: 315 }}><ZoomBar value={current} onChange={onChange} /></div>)
    const slider = screen.getByRole('slider', { name: /zoom/i })
    slider.focus()
    await user.keyboard('{ArrowRight}')
    expect(current).toBeGreaterThan(0.3)
    await user.keyboard('{ArrowLeft}')
    expect(current).toBeLessThanOrEqual(0.3)
  })

  it('updates on click within track', () => {
    let current = 0.1
    const onChange = (v: number) => { current = v }
    render(<div style={{ width: 315 }}><ZoomBar value={current} onChange={onChange} /></div>)
    const slider = screen.getByRole('slider', { name: /zoom/i }) as HTMLDivElement
    // JSDOM doesn't compute layout; mock a useful bounding rect
    slider.getBoundingClientRect = () => ({
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      bottom: 6,
      right: 315,
      width: 315,
      height: 6,
      toJSON: () => ({})
    } as DOMRect)
    fireEvent.click(slider, { clientX: 315 * 0.8 })
    expect(current).toBeGreaterThan(0.5)
  })
})


