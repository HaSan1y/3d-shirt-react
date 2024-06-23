import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	optimizeDeps: {
		exclude: ["chunk-RA5UNJCH.js"],
	},
	build: {
		sourcemap: false, // or 'inline'
	},
});
