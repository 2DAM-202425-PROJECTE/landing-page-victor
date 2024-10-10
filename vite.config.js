import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                nested: resolve(__dirname, 'contactam.html', 'contractam.html'),

            },
        },
    },
    base: '/landing-page-victor/'
})