import * as fs from "fs";
import * as path from "path";
import { describe, it } from "@jest/globals";
const nunjucks = require("nunjucks");

// You can delete this directory (test/delete-me) after you have generated an appropriate package.json.
// You can also uninstall nunjucks if you don't need it elsewhere:  `npm uninstall nunjucks`.
describe("Nunjucks Utility", () => {
	const context = {
		author: "Michael Iaria",
		description: "A GitHub template repository used to create Node.js modules written in TypeScript",
		license: "MIT",
		packageName: "node-typescript-template",
		repositoryUrl: "git+https://github.com/cloudy-bits/node-typescript-template.git",
		version: "1.0.0",
	};

	it.skip("Render package.json", () => {
		const rendered = nunjucks.render(path.join(__dirname, "package.json.njk"), context);
		fs.writeFileSync(path.join(__dirname, "..", "..", "package.json"), rendered);
	});
});
