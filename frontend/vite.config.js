import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',   // Backend running on localhost
        changeOrigin: true,                // Ensures correct Host header
        secure: false,                     // If your backend isn't HTTPS (useful in local dev)
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Remove '/api' prefix if needed
      }
    }
  }
});