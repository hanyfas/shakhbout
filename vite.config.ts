import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // Base path:
    // - On Vercel, env var VERCEL is defined → use root '/'
    // - Otherwise (e.g., GitHub Pages project site), use '/shakhbout/'
    base: process.env.VERCEL ? '/' : '/shakhbout/',
    optimizeDeps: {
        include: ['@mappedin/mappedin-js'],
    },
    server: {
        hmr: {
            overlay: false, // Disable error overlay for PnP errors
        },
    },
})
