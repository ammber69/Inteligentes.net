import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // 🛡️ Production code obfuscation & protection
    minify: 'terser',
    terserOptions: {
      compress: {
        // Remove ALL console.* calls from production bundle
        drop_console: true,
        drop_debugger: true,
        // Remove unreachable code
        dead_code: true,
        // Collapse variables when possible
        collapse_vars: true,
        // Reduce code size
        reduce_vars: true,
        // Remove unused variables
        unused: true,
      },
      mangle: {
        // Aggressively rename all variables/functions to short names
        toplevel: true,
        // Mangle property names in objects (be careful with this)
        // properties: { regex: /^_/ }, // Only mangle underscore-prefixed props
      },
      format: {
        // Remove all comments
        comments: false,
        // No beautification
        beautify: false,
      },
    },
    // Don't generate source maps in production
    sourcemap: false,
    // Chunk strategy to make code harder to follow
    rollupOptions: {
      output: {
        // Hash-based file names
        entryFileNames: 'assets/[hash].js',
        chunkFileNames: 'assets/[hash].js',
        assetFileNames: 'assets/[hash].[ext]',
      },
    },
  },
})
