import { defineConfig } from 'vite'
import { copyFileSync } from 'fs'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  publicDir: 'public',
  plugins: [
    {
      name: 'copy-cname',
      closeBundle() {
        try {
          copyFileSync('CNAME', 'dist/CNAME')
        } catch (e) {
          console.warn('Could not copy CNAME file:', e.message)
        }
      }
    }
  ]
})
