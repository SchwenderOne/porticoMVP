import React, { useEffect, useMemo, useRef, useState } from 'react'

type ScaleContainerProps = {
  width: number
  height: number
  maxScale?: number
  children: React.ReactNode
}

export default function ScaleContainer({ width, height, maxScale = 1, children }: ScaleContainerProps) {
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
    return Math.min(maxScale, containerWidth / width)
  }, [containerWidth, width, maxScale])

  return (
    <div ref={outerRef} className="w-full overflow-hidden">
      <div
        className="mx-auto origin-top-left"
        style={{ width, height, transformOrigin: 'top left', transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  )
}


