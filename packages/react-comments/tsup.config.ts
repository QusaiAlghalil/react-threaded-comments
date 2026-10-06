import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  // Ship both module systems so the package works for `import` and `require` users.
  format: ["esm", "cjs"],
  // Generate .d.ts files so TypeScript users get types.
  dts: true,
  sourcemap: true,
  clean: true,
  // Never bundle React: the consumer's app provides it (see peerDependencies).
  external: ["react", "react-dom"],
});
