import { ReactNode, CSSProperties } from 'react'

export type GlassProps = {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  radius?: 'chip' | 'circle' | 'none'
  blur?: '17' | '4_1' | '3_4'
  background?: 'glass' | 'frosted25'
  ring?: 'light' | 'chip' | 'none'
  role?: string
  'data-name'?: string
  'data-node-id'?: string
}

export default function Glass({
  children,
  className,
  style,
  radius = 'chip',
  blur = '17',
  background = 'glass',
  ring = 'light',
  role,
  ...rest
}: GlassProps) {
  const radiusPx = radius === 'chip' ? 'var(--radius-27-867)' : radius === 'circle' ? 'var(--radius-9999)' : '0px'
  const blurPx = blur === '17' ? 'var(--blur-17-65)' : blur === '4_1' ? 'var(--blur-4-1)' : 'var(--blur-3-4)'
  const bg = background === 'glass' ? 'var(--glass-bg)' : 'var(--frosted-bg-25)'
  const base: CSSProperties = {
    borderRadius: radiusPx,
    backdropFilter: `blur(${blurPx})`,
    background: bg
  }
  const ringStyle: CSSProperties =
    ring === 'none'
      ? {}
      : ring === 'light'
      ? { border: `${'var(--border-1-858)'} solid var(--border-color-light)` }
      : { border: `${'var(--border-1-026)'} solid var(--border-color-chip)`, boxShadow: 'var(--shadow-chip)' }

  return (
    <div className={className} style={{ ...base, ...ringStyle, ...style }} role={role} {...rest}>
      {children}
    </div>
  )
}
