import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Add cache headers for development server
    headers: {
      'Cache-Control': 'public, max-age=31536000', // 1 year for static assets
    }
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
    // Ensure single React instance
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@radix-ui/react-toast',
      '@radix-ui/react-tooltip',
      '@radix-ui/react-dialog',
      '@radix-ui/react-popover',
      '@radix-ui/react-select',
      '@radix-ui/react-label',
      '@radix-ui/react-slot'
    ],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Optimize bundle size
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: true,
    },
    // Reduce chunk size limit warnings
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      external: (id) => {
        // Don't externalize anything - we want everything bundled
        return false;
      },
      output: {
        // Split vendor chunks for better caching
        manualChunks(id) {
          try {
            if (id.includes('node_modules')) {
              // Keep ALL React-related libraries together
              if (id.includes('react') ||
                  id.includes('react-dom') ||
                  id.includes('@radix-ui') ||
                  id.includes('react-router') ||
                  id.includes('react-helmet') ||
                  id.includes('@tanstack/react-query')) {
                return 'react-vendor';
              }
              if (id.includes('lucide-react')) {
                return 'icons-vendor';
              }
              // Everything else
              return 'other-vendor';
            }
          } catch (error) {
            console.warn('Error in manualChunks:', error);
            return 'react-vendor';
          }
        },
        // Add hash to filenames for better caching
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            return `images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
  // Optimize asset handling
  assetsInclude: ['**/*.webp', '**/*.avif'],
  preview: {
    port: 8080,
    host: true,
    // Add cache headers for preview server
    headers: {
      'Cache-Control': 'public, max-age=31536000', // 1 year for static assets
    }
  },
}));
