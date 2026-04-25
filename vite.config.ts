import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { tanstackRouter } from '@tanstack/router-plugin/vite'

export default defineConfig(() => {
  return {
    base: '/compost-app/',
    plugins: [
      tanstackRouter({
        target: 'react',
        autoCodeSplitting: true,
      }),
      react(),
    ],
  }
})
