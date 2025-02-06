import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import analyze from "rollup-plugin-analyzer";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: "terser",
    rollupOptions: {
      plugins: [analyze()],
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "script-defer",
      devOptions: {
        enabled: true,
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
        globPatterns: ["**/*.{js,css,html,png,svg,jpg,pdf,jsx}"],
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
        navigateFallback: "/index.html",
        immediateClaimClients: true,
        sourcemap: true,

        buildId: () => Date.now().toString(), // Force new SW on each build
        debug: true, 
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "assets-cache",
              cacheableResponse: { statuses: [0, 200] },
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
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
