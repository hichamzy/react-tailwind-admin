// vite.config.ts
import path from "path";
import { defineConfig } from "file:///D:/React-project-learn/react-tailwind-admin/node_modules/vite/dist/node/index.js";
import react from "file:///D:/React-project-learn/react-tailwind-admin/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { TanStackRouterVite } from "file:///D:/React-project-learn/react-tailwind-admin/node_modules/@tanstack/router-plugin/dist/esm/vite.js";
var __vite_injected_original_dirname = "D:\\React-project-learn\\react-tailwind-admin";
var vite_config_default = defineConfig({
  plugins: [TanStackRouterVite(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  server: {
    port: 3e3
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxSZWFjdC1wcm9qZWN0LWxlYXJuXFxcXHJlYWN0LXRhaWx3aW5kLWFkbWluXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxSZWFjdC1wcm9qZWN0LWxlYXJuXFxcXHJlYWN0LXRhaWx3aW5kLWFkbWluXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9SZWFjdC1wcm9qZWN0LWxlYXJuL3JlYWN0LXRhaWx3aW5kLWFkbWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IHsgVGFuU3RhY2tSb3V0ZXJWaXRlIH0gZnJvbSBcIkB0YW5zdGFjay9yb3V0ZXItcGx1Z2luL3ZpdGVcIjtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcblx0cGx1Z2luczogW1RhblN0YWNrUm91dGVyVml0ZSgpLCByZWFjdCgpXSxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRhbGlhczoge1xyXG5cdFx0XHRcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRzZXJ2ZXI6IHtcclxuXHRcdHBvcnQ6IDMwMDAsXHJcblx0fSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVQsT0FBTyxVQUFVO0FBQzFVLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixTQUFTLDBCQUEwQjtBQUhuQyxJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDO0FBQUEsRUFDdkMsU0FBUztBQUFBLElBQ1IsT0FBTztBQUFBLE1BQ04sS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3JDO0FBQUEsRUFDRDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ1AsTUFBTTtBQUFBLEVBQ1A7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
