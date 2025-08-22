import { useCallback, useEffect, useRef, useState } from 'react'

const imgGroup = '/topbar-assets/701acd33d56f71c810765b8fd8cb27d620cd9e16.svg'
const imgGroup1 = '/topbar-assets/720fb423985bab7485f2c2d9a534520057b96e15.svg'
const imgMinusMagnifyingglass1 = '/topbar-assets/9c8c6bd6e0a75711023d94a1eaa195aaafc79fe3.svg'
const imgBackground = '/topbar-assets/9c38d7499c8de16f293c4701991d9b8cfcda3212.svg'
const imgMinus = '/topbar-assets/3f3f92f9e00934d91d2b4e0de0b12ab2c7b4c360.svg'

export type ZoomBarProps = {
  value?: number // 0..1
  onChange?: (next: number) => void
  ariaLabel?: string
}

export default function ZoomBar({ value: controlledValue, onChange, ariaLabel = 'Zoom' }: ZoomBarProps) {
  const isControlled = typeof controlledValue === 'number'
  const [uncontrolled, setUncontrolled] = useState<number>(0.65) // 0..1
  const value = isControlled ? controlledValue! : uncontrolled
  const trackRef = useRef<HTMLDivElement | null>(null)
  const draggingRef = useRef<boolean>(false)

  const setFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const raw = (clientX - rect.left) / rect.width
    const clamped = Math.max(0, Math.min(1, raw))
    if (isControlled) {
      onChange?.(clamped)
    } else {
      setUncontrolled(clamped)
    }
  }, [isControlled, onChange])

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return
      setFromClientX(e.clientX)
    }
    const onUp = () => {
      draggingRef.current = false
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
    }
    if (draggingRef.current) {
      window.addEventListener('pointermove', onMove)
      window.addEventListener('pointerup', onUp)
      window.addEventListener('pointercancel', onUp)
    }
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
    }
  }, [setFromClientX])

  const onMinus = useCallback(() => {
    const next = Math.max(0, +(value - 0.1).toFixed(2))
    if (isControlled) {
      onChange?.(next)
    } else {
      setUncontrolled(next)
    }
  }, [value, isControlled, onChange])
  const onPlus = useCallback(() => {
    const next = Math.min(1, +(value + 0.1).toFixed(2))
    if (isControlled) {
      onChange?.(next)
    } else {
      setUncontrolled(next)
    }
  }, [value, isControlled, onChange])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.setAttribute('aria-valuenow', String(Math.round(value * 100)))
  }, [value])

  return (
    <div className="relative size-full" data-name="zoom" data-node-id="10:573">
      <div
        className="absolute"
        style={{
          left: 0,
          top: 0,
          width: 315,
          height: 44,
          borderRadius: 27.867,
          backdropFilter: 'blur(17.65px)',
          background: 'rgba(229,229,229,0.5)'
        }}
        data-node-id="10:574"
      >
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{ inset: 0, border: '1.858px solid #e9e9e9', borderRadius: 27.867 }}
        />
      </div>

      {/* plus button */}
      <button
        type="button"
        aria-label="Zoom in"
        onClick={onPlus}
        className="absolute overflow-hidden"
        style={{ left: 278, top: 13, width: 20, height: 20 }}
        data-name="plus"
        data-node-id="10:575"
      >
        <div className="absolute" style={{ inset: 0 }} data-name="Group" data-node-id="10:576">
          <img alt="" className="block max-w-none" style={{ width: '100%', height: '100%' }} src={imgGroup} />
        </div>
        <div className="absolute overflow-hidden" style={{ inset: 0 }} data-name="plus.magnifyingglass 1" data-node-id="10:579">
          <div className="absolute" style={{ inset: 0 }} data-name="Group" data-node-id="10:580">
            <img alt="" className="block max-w-none" style={{ width: '100%', height: '100%' }} src={imgGroup1} />
          </div>
          <div className="absolute overflow-hidden" style={{ inset: 0 }} data-name="minus.magnifyingglass 1" data-node-id="10:583">
            <img alt="" className="block max-w-none" style={{ width: '100%', height: '100%' }} src={imgMinusMagnifyingglass1} />
          </div>
        </div>
      </button>

      {/* progress track */}
      <div
        ref={trackRef}
        role="slider"
        aria-label={ariaLabel}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(value * 100)}
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
            e.preventDefault()
            onMinus()
          }
          if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
            e.preventDefault()
            onPlus()
          }
        }}
        onPointerDown={e => {
          draggingRef.current = true
          setFromClientX(e.clientX)
        }}
        onClick={e => setFromClientX(e.clientX)}
        className="absolute"
        style={{ left: 45, right: 129, top: 19, height: 6 }}
        data-name="Background"
        data-node-id="10:586"
      >
        <img alt="" className="block max-w-none" style={{ width: '100%', height: '100%' }} src={imgBackground} />
        <div className="absolute" style={{ left: 0, top: 0, height: 6, width: `${value * 100}%`, background: '#1985cc', borderRadius: 2.788 }} data-name="Progress line" data-node-id="10:588" />
        <div className="absolute" style={{ left: `calc(${value * 100}% - 8px)`, top: -6, width: 17, height: 17, background: '#ffffff', borderRadius: 9999 }} data-name="_Control handle" data-node-id="10:589">
          <div aria-hidden className="absolute pointer-events-none" style={{ inset: 0, border: '1.045px solid #1985cc', borderRadius: 9999 }} />
          <div className="absolute" style={{ left: 0, top: 0, width: 17, height: 17, background: '#ffffff', borderRadius: 9999 }} data-name="Handle" id="node-I10_589-3287_443175">
            <div aria-hidden className="absolute pointer-events-none" style={{ inset: 0, border: '1.394px solid #1985cc', borderRadius: 9999, boxShadow: '0px 2.788px 4.181px -1px rgba(10,13,18,0.1), 0px 1.394px 2.788px -2px rgba(10,13,18,0.06)' }} />
          </div>
        </div>
      </div>

      {/* minus icon */}
      <button
        type="button"
        aria-label="Zoom out"
        onClick={onMinus}
        className="absolute"
        style={{ left: 16, top: 14, width: 20, height: 20 }}
        data-name="minus"
        data-node-id="10:590"
      >
        <img alt="" className="block max-w-none" style={{ width: '100%', height: '100%' }} src={imgMinus} />
      </button>
    </div>
  )
}


