import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{ files: ["**/*.{js,mjs,cjs,ts}"] },
	{ ignores: [".husky/", "dist/", "node_modules/"] },
	{ languageOptions: { globals: globals.browser } },
	{ rules: { "@typescript-eslint/no-require-imports": "off" } },
];
