import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  build: {
    outDir: "dist",
    assetsDir: "",
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: "app.min.js", // Keep the same for JS files
        chunkFileNames: "app.[hash].js", // Keep the same for JS files
        // assetFileNames: `app.min.css`, // Keep the same for resource files
        assetFileNames(chunk) {
          return chunk.name?.endsWith(".css")
            ? "app.min.css"
            : "[name].[hash].[ext]";
        },
        manualChunks: undefined,
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@schemas": path.resolve(__dirname, "./src/schemas"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
});
