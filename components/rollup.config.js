import rollupBabel from "@rollup/plugin-babel";
import pkg from "./package.json";

const input = "src/index.js";

const external = ["react", "react-dom"];

const output = [
  {
    file: pkg.main,
    format: "cjs",
    sourcemap: true,
  },
];

const plugins = [
  rollupBabel({
    babelHelpers: "inline",
    exclude: "node_modules/**",
    presets: ["@babel/preset-env", "@babel/preset-react"],
  }),
];

export default {
  input,
  external,
  output,
  plugins,
};
