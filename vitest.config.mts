import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './'),
      },
    ],
  },
})
