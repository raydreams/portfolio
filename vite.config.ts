import { defineConfig } from 'vite'

/** Plugins */
import million from 'million/compiler'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [million.vite(), react(), tsconfigPaths()],
})
