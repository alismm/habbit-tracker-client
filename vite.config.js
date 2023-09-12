import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/global.scss";`
      }
    }
  },
  server: {
    port: 7980,
    proxy: {
      '/service/userManager@1/login': {
        target: 'https://usermanager-v1-dev.apipart.ir',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
