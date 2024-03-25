import path from 'path'
import { islandComponents } from 'honox/vite'
import { defineConfig } from 'vite'

const root = './'
export default defineConfig(({ mode }) => {
  return {
    build: {
      rollupOptions: {
        input: {
          server: '/app/server.ts',
          styles: '/app/style.css',
          client: '/app/client.ts',
        },
        manifest: true,
        output: {
          entryFileNames: '[name].js',
          assetFileNames: 'static/assets/[name].[ext]',
        },
      },
    },
    plugins: [islandComponents()],
  }
})
