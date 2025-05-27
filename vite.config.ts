import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.lib.json',
      outDir: 'dist',
      include: ['src/**/*'],
      exclude: ['src/**/*.stories.*', 'src/**/*.test.*']
    }),
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  ],
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'LibHeroUI',
      formats: ['es', 'umd'],
      fileName: (format) => `lib-heroui.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react', 
        'react-dom', 
        'react/jsx-runtime',
        '@heroui/react',
        '@heroui/system',
        '@heroui/theme',
        '@heroui/button',
        'framer-motion',
        'tailwindcss'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'ReactJSXRuntime',
          '@heroui/react': 'HeroUI',
          '@heroui/system': 'HeroUISystem',
          '@heroui/theme': 'HeroUITheme',
          '@heroui/button': 'HeroUIButton',
          'framer-motion': 'FramerMotion',
        },
      },
    },
  },
})