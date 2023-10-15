import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Mode, plugin as mdPlugin } from 'vite-plugin-markdown'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    mdPlugin({ mode: [Mode.HTML] }),
    svgr({ svgrOptions: { icon: true } }),
  ],
  base: "/resume/",
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
