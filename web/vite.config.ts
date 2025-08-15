import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const DEV_PORT = 5173
const PREVIEW_PORT = Number(process.env.PORT) || 3000

export default defineConfig({
  plugins: [react()],
  server: { host: true, port: DEV_PORT },
  preview: { host: true, port: PREVIEW_PORT },
})
