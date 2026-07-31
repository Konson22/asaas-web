import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import laravel from 'laravel-vite-plugin'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.tsx'],
      refresh: true,
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./resources/js', import.meta.url)),
    },
  },
  server: {
    host: '127.0.0.1',
    hmr: {
      host: '127.0.0.1',
    },
    cors: {
      origin: [
        'http://asaas.local',
        'https://asaas.local',
        'https://asaasvantage.com',
        'http://asaasvantage.com',
        /^https?:\/\/([a-z0-9-]+\.)*asaasvantage\.com(:\d+)?$/i,
        /^https?:\/\/([a-z0-9-]+\.)*asaas\.local(:\d+)?$/i,
        /^https?:\/\/(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/,
        /^https?:\/\/192\.168\.\d+\.\d+(:\d+)?$/,
        /^https?:\/\/10\.\d+\.\d+\.\d+(:\d+)?$/,
      ],
    },
    watch: {
      ignored: ['**/storage/framework/views/**'],
    },
  },
})
