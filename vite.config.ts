import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// ssr part and below are from:
// https://github.com/mui/material-ui/issues/44244

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  ssr: {
    noExternal: ['@mui/icons-material'],
  },
  optimizeDeps: {
    include: ['@mui/icons-material'],
  },
});
