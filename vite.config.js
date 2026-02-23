import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-nguyen-tuan-dat/', // Thêm đúng dòng này! Ví dụ: base: '/portfolio-website/',
})