// CommonJS scheduler shim to satisfy react-dom's require('scheduler') expectations

function now() {
	return (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now()
}

function shouldYield() { return false }
function requestPaint() {}
function log() {}
function setDisableYieldValue() {}

const ImmediatePriority = 1
const UserBlockingPriority = 2
const NormalPriority = 3
const LowPriority = 4
const IdlePriority = 5

function runWithPriority(_priority, fn) { return fn() }

function scheduleCallback(_priority, callback) {
	const id = setTimeout(() => {
		try {
			const start = now()
			callback({ didTimeout: false, timeRemaining: () => Math.max(0, 50 - (now() - start)) })
		} catch (e) {}
	}, 0)
	return id
}

function cancelCallback(id) { clearTimeout(id) }
function getCurrentPriorityLevel() { return NormalPriority }

module.exports = {
	unstable_now: now,
	unstable_shouldYield: shouldYield,
	unstable_requestPaint: requestPaint,
	unstable_ImmediatePriority: ImmediatePriority,
	unstable_UserBlockingPriority: UserBlockingPriority,
	unstable_NormalPriority: NormalPriority,
	unstable_LowPriority: LowPriority,
	unstable_IdlePriority: IdlePriority,
	unstable_getCurrentPriorityLevel: getCurrentPriorityLevel,
	unstable_scheduleCallback: scheduleCallback,
	unstable_cancelCallback: cancelCallback,
	unstable_runWithPriority: runWithPriority,
	log,
	unstable_setDisableYieldValue: setDisableYieldValue,
}


