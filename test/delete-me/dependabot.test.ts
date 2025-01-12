import * as fs from "fs";
import * as path from "path";
import { describe, it } from "@jest/globals";
import util from "util";
const exec = util.promisify(require("child_process").exec);

// You can delete this directory (test/delete-me) after you create your repository.
describe("Dependabot Utility", () => {
	it("Update Dependencies", async () => {
		const packages = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "..", "package.json")).toString());
		const packagesTemplate = JSON.parse(fs.readFileSync(path.join(__dirname, "package.json.njk")).toString());

		packagesTemplate.dependencies = packages.dependencies;
		packagesTemplate.devDependencies = packages.devDependencies;

		fs.writeFileSync(path.join(__dirname, "package.json.njk"), JSON.stringify(packagesTemplate));
		await exec(`npx prettier --parser json --write ${path.join(__dirname, "package.json.njk")}`);
	});
});
