import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/music-game-guide/',
  build: {
    sourcemap: 'hidden',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
