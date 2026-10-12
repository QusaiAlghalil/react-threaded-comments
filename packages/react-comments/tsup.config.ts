import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/index.ts"],
  // Ship both module systems so the package works for `import` and `require` users.
  format: ["esm", "cjs"],
  // Generate .d.ts files so TypeScript users get types.
  dts: true,
  sourcemap: true,
  clean: !options.watch,
  external: ["react", "react-dom"],
}));
