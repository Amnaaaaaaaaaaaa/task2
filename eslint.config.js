import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    ignores: ["node_modules"],
    languageOptions: { globals: globals.node },
    ...pluginJs.configs.recommended,
  },
];
