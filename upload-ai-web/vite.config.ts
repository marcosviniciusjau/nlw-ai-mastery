import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["@ffmpeg/ffmpeg", "@ffmpeg/util"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
  fs: {
    allow: ["./src", "./public", "C:/Users/Marcos Vinicius/node_modules/.pnpm/@ffmpeg+ffmpeg@0.12.6/node_modules/@ffmpeg/ffmpeg/dist/esm/worker.js"],
    // ...
  },
  // ...

    // ...
  },
})
