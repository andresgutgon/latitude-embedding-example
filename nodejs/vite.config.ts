import path from 'path'
import honox from 'honox/vite'
import pages from '@hono/vite-cloudflare-pages'
import { defineConfig } from 'vite'

const root = './'
export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: {
            styles: '/app/style.css',
            client: '/app/client.ts',
          },
          manifest: true,
          output: {
            assetFileNames: 'static/assets/[name].[ext]',
          },
        },
      },
    }
  } else {
    return {
      plugins: [
        honox({
          islandComponents: {
            isIsland: (id) => {
              const resolvedPath = path.resolve(root).replace(/\\/g, '\\\\')
              const regexp = new RegExp(
                `${resolvedPath}[\\\\/]app[^\\\\/]*[\\\\/]islands[\\\\/].+\.tsx?$`,
              )
              return regexp.test(path.resolve(id))
            },
          },
        }),
        pages()
      ],
    }
  }
})
