import honox from 'honox/vite'
import { defineConfig } from 'vite'

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
      plugins: [honox({ islands: true })],
    }
  }
})
