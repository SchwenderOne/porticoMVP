import { useEffect, useMemo, useRef, useState } from 'react'

export type ScaleContainerProps = {
  width: number
  height: number
  maxScale?: number // allow upscaling so topbar can span full viewport width
  children: React.ReactNode
}

export function ScaleContainer({ width, height, maxScale, children }: ScaleContainerProps) {
  const outerRef = useRef<HTMLDivElement | null>(null)
  const [containerWidth, setContainerWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : width)

  useEffect(() => {
    if (!outerRef.current) return
    const element = outerRef.current
    const update = () => setContainerWidth(element.clientWidth)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(element)
    window.addEventListener('resize', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  const scale = useMemo(() => {
    if (width === 0) return 1
    const raw = containerWidth / width
    return typeof maxScale === 'number' ? Math.min(maxScale, raw) : raw
  }, [containerWidth, width, maxScale])

  return (
    <div ref={outerRef} className="w-full overflow-hidden">
      <div
        className="origin-top-left"
        style={{ width, height, transformOrigin: 'top left', transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  )
}

export default ScaleContainer


