import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from '@solidjs/start/config'


const cwd = path.dirname(fileURLToPath(import.meta.url))


export default defineConfig({
  vite: { // vite config goes here
    resolve: {
      alias: {
        '@src': path.resolve(cwd, 'src'),
        '@solidfun': path.resolve(cwd, '.solidfun/fundamentals'),
        'fun.config': path.resolve(cwd, './fun.config.js'),
      }
    }
  }
})