import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    imagetools(),
    viteCompression({ algorithm: "brotliCompress" })
  ],
  optimizeDeps: {
    include: [
      "@mui/joy",
      "@mui/material",
      "@emotion/react",
      "@emotion/styled"
    ],
  },
  server: {
    port: 3000,
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          mui: ["@mui/material", "@emotion/react", "@emotion/styled"],
        },
      },
    },
  },
});
