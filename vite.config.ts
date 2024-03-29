import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import Unocss from 'unocss/vite'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),

    AutoImport({
      imports: ['vue', '@vueuse/core', 'pinia'],
      dts: 'src/typings/auto-imports.d.ts',
      dirs: [
        'src/utils/common/',
        'src/composables/',
      ],
      vueTemplate: true,
    }),
    Unocss(),
    Components({
      resolvers: [],
      dts: 'src/typings/components.d.ts',
    }),
    VueDevTools(),
  ],
})
