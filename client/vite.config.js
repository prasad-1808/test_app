import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Allows access inside Docker
    port: 5173,  // Matches Docker port
    strictPort: true,  // Ensures it doesn't change
  }
})
