import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // ex base: '/my_project.git/',
  base: "web_profile",
  plugins: [react()],
});
