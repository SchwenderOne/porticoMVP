import { createRoot } from 'react-dom/client'
import * as Scheduler from 'scheduler'
import './index.css'
import App from './App.tsx'

// TEMP: debug scheduler export shape in browser
// eslint-disable-next-line no-console
console.log('scheduler exports:', Object.keys(Scheduler), 'unstable_now type:', typeof (Scheduler as any).unstable_now)

createRoot(document.getElementById('root')!).render(<App />)
