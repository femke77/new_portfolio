import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import analyze from "rollup-plugin-analyzer";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/

export default defineConfig({
  build: {
    minify: "terser",
    rollupOptions: {
      plugins: [process.env.NODE_ENV === 'production' ? null : analyze()].filter(Boolean),
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      devOptions: {
        enabled: true,
        type: "module",
        navigateFallback: "index.html",
      },
      manifest: {
        name: "Meg Meyers Portfolio",
        short_name: "Meg Meyers",
        description: "Meg Meyers web development profile built with React",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,jpg,pdf,jsx}"], //precache everything (38Mb)
        maximumFileSizeToCacheInBytes: 32 * 1024 * 1024,
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
        navigateFallback: "/index.html",
        sourcemap: true,
        // cacheId: `app-${Date.now()}`, // Force new SW on each build

        // no images are runtime cached as they are in the precache
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "image", 
            handler: "CacheFirst",  //images don't really change much so just get what's in the cache
            options: {
              cacheName: "assets-cache",
              cacheableResponse: { statuses: [0, 200] },
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
          {
            urlPattern: ({ url }) => url.href.includes('credly.com'), 
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "credly-script-cache",
              cacheableResponse: {
                statuses: [0, 200],
              },
              expiration: {
                maxEntries: 3,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
              },
            },
          },
        ],
      },
    }),
  ],
  server: {
    port: 3001,
    open: true,
    host: true,
  },
});
