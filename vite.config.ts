import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from 'tailwindcss';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/' : '/', // 根据部署路径调整
  plugins: [
    vue(),
    vueJsx(),
    ...(mode === 'development' ? [vueDevTools()] : []), // 仅在开发模式启用
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}));

// export default defineConfig({
//   plugins: [
//     vue(),
//     vueJsx(),
//     vueDevTools(),
//   ],
//   css: {
//     postcss: {
//       plugins: [tailwindcss()],
//     },
//   },
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     },
//   },
// })