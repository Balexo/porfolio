import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import vitest from "eslint-plugin-vitest"; // Importa el plugin de vitest

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:vitest/recommended",
    ],
    files: ["**/*.{ts,tsx}"],
    env: {
      browser: true,
      node: true,
      "vitest/globals": true,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        vi: "readonly",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      vitest: vitest,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
);
