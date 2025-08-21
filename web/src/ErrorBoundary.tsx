import { Component, type ReactNode } from 'react'

type ErrorBoundaryProps = {
	children: ReactNode
}

type ErrorBoundaryState = {
	hasError: boolean
	errorMessage?: string
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	state: ErrorBoundaryState = { hasError: false }

	static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
		return { hasError: true, errorMessage: error instanceof Error ? error.message : String(error) }
	}

	componentDidCatch(error: unknown, errorInfo: unknown) {
		// In production, wire to logging backend if needed
		if (import.meta.env.DEV) {
			console.error('ErrorBoundary caught', error, errorInfo)
		}
	}

	render() {
		if (this.state.hasError) {
			return (
				<div style={{ padding: 16, color: '#b91c1c', fontFamily: 'Inter, system-ui, Arial, sans-serif' }}>
					<h1 style={{ fontSize: 18, margin: 0 }}>Something went wrong.</h1>
					<p style={{ marginTop: 8, opacity: 0.8 }}>{this.state.errorMessage}</p>
				</div>
			)
		}
		return this.props.children
	}
}


