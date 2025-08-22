/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
import { fileURLToPath } from 'node:url'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { visualizer } from 'rollup-plugin-visualizer'
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
const DEV_PORT = 5173
const PREVIEW_PORT = Number(process.env.PORT) || 3000
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@constants': path.resolve(__dirname, 'src/constants')
    }
  },
  server: {
    host: true,
    port: DEV_PORT
  },
  preview: {
    host: true,
    port: PREVIEW_PORT,
    // Allow Railway domain access to the preview server
    allowedHosts: ['porticomvp-production.up.railway.app']
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook')
          })
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
              {
                browser: 'chromium'
              }
            ]
          },
          setupFiles: ['.storybook/vitest.setup.ts']
        }
      }
      ,
      {
        test: {
          name: 'unit',
          environment: 'jsdom',
          globals: true,
          setupFiles: ['src/test/setup.ts']
        }
      }
    ]
  },
  build: {
    rollupOptions: {
      plugins: process.env.ANALYZE ? [visualizer({ filename: 'dist/stats.html', open: false })] : []
    }
  }
})
