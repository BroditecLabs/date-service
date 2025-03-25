import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";
import airbnbBase from "eslint-config-airbnb-base";
import airbnbBaseTypescript from "eslint-config-airbnb-base-typescript";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...airbnbBase.rules,
      ...airbnbBaseTypescript.rules,
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".ts"],
        },
      },
    },
  },
]);
