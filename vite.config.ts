// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import tailwindcss from "@tailwindcss/vite";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   optimizeDeps: {
//     include: ["@mui/joy", "@mui/material", "@emotion/react", "@emotion/styled"],
//   },
//   server: {
//     port: 3000,
//   },
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    imagetools(), // 🖼️ Image optimization
    viteCompression({ algorithm: "brotliCompress" }) // 🔥 Compress output
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
    minify: "terser", // 💡 Better than default "esbuild" for smaller output
    terserOptions: {
      compress: {
        drop_console: true, // 🧹 Remove console.logs
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
