import { relative } from "node:path";
import { cwd } from "node:process";

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => relative(cwd(), f)).join(" --file ")}`;

/** @type {import('lint-staged').Configuration} */
const config = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
};

export default config;
