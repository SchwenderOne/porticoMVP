// Minimal scheduler shim to avoid runtime issues in some environments
// Provides the named exports React DOM expects.

type Callback = (deadline: { timeRemaining: () => number; didTimeout: boolean }) => void

export const unstable_now = () => (typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now())

export const unstable_shouldYield = () => false
export const unstable_requestPaint = () => {}

export const unstable_ImmediatePriority = 1
export const unstable_UserBlockingPriority = 2
export const unstable_NormalPriority = 3
export const unstable_LowPriority = 4
export const unstable_IdlePriority = 5

export const unstable_getCurrentPriorityLevel = () => unstable_NormalPriority

export const unstable_scheduleCallback = (_priority: number, callback: Callback) => {
  const id = setTimeout(() => {
    try {
      const start = unstable_now()
      callback({
        didTimeout: false,
        timeRemaining: () => Math.max(0, 50 - (unstable_now() - start)),
      })
    } catch {}
  }, 0)
  return id as unknown as number
}

export const unstable_cancelCallback = (id: number) => {
  clearTimeout(id as unknown as ReturnType<typeof setTimeout>)
}

export const unstable_runWithPriority = <T,>(_: number, fn: () => T): T => fn()


