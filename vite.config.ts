import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    ...(mode === 'development' 
      ? [componentTagger()]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    cssMinify: 'esbuild',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // React и связанные библиотеки
          'react-vendor': [
            'react',
            'react-dom',
            'react-router-dom',
            'react-helmet-async',
            'react-hook-form',
            '@hookform/resolvers',
            'react-resizable-panels',
            'react-day-picker'
          ],
          // Все Radix UI компоненты
          'ui-vendor': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-hover-card',
            '@radix-ui/react-label',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-progress',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slider',
            '@radix-ui/react-slot',
            '@radix-ui/react-switch',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            '@radix-ui/react-toggle',
            '@radix-ui/react-tooltip'
          ],
          // Утилиты
          'utils-vendor': [
            '@tanstack/react-query',
            'class-variance-authority',
            'clsx',
            'date-fns',
            'lucide-react',
            'zod',
            'tailwind-merge',
            'next-themes',
            'sonner',
            'cmdk',
            'embla-carousel-react',
            'recharts',
            'vaul'
          ]
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // Group images separately for better caching
          if (assetInfo.name?.match(/\.(png|jpe?g|webp|svg|gif)$/)) {
            return 'images/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    // Improved performance settings
    reportCompressedSize: false,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    // Additional optimizations for faster loading
    target: 'es2020',
    cssCodeSplit: true,
    assetsInlineLimit: 4096, // Inline small assets as base64
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
    ],
  },
  preview: {
    port: 8080,
    host: true,
    headers: {
      // Add cache headers for images
      'Cache-Control': 'public, max-age=31536000', // 1 year for images
    },
  },
  // Performance optimizations
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
  // Static asset handling
  publicDir: 'public',
  assetsInclude: ['**/*.webp', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
}));
