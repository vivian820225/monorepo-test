import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  build: {
    lib: {
      entry: "./index.js",
      name: "common-ui",
      fileName: (format) => `common-ui-${format}.js`,
    },
    rollupOptions: {
      external: ["vue"], // specifying which modules to exclude from the output file
    },
    cssCodeSplit: true, // splitting CSS into separate files
  },
  plugins: [vue()],
});
