/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dynamicImport from 'vite-plugin-dynamic-import'

export default defineConfig({
    plugins: [
        react(),
        dynamicImport()
    ],
})