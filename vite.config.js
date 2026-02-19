import { defineConfig } from 'vite'

export default defineConfig({
  // public/ is served statically at root (media assets, logo, etc.)
  publicDir: 'public',
  build: {
    outDir: 'dist',
  },
})
