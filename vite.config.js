import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-x9",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1600, // Increase the warning limit to 1000 kB
  }
})
