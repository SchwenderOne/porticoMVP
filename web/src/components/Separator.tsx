import { CSSProperties } from 'react'

export type SeparatorProps = {
  orientation?: 'vertical' | 'horizontal'
  length: number
  thickness?: number
  color?: string
  opacity?: number
  style?: CSSProperties
  className?: string
  'data-name'?: string
  'data-node-id'?: string
}

export default function Separator({
  orientation = 'vertical',
  length,
  thickness = 2.052,
  color = 'rgba(130,130,130,0.25)',
  opacity = 1,
  style,
  className,
  ...rest
}: SeparatorProps) {
  const base: CSSProperties =
    orientation === 'vertical'
      ? { width: thickness, height: length, background: color, opacity }
      : { height: thickness, width: length, background: color, opacity }
  return <div className={className} style={{ ...base, ...style }} {...rest} />
}
