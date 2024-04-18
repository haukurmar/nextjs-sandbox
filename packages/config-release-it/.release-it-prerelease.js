const { execSync } = require("child_process");
const baseFile = require("@app/config-release-it");
const packageName = process.env.npm_package_name;
const getPreReleaseTag = () => {
	const branchName = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
	// Replace slashes and other special characters with hyphens
	return branchName.replace(/\/|[^a-zA-Z0-9]/g, "-");
};

const preRelease = getPreReleaseTag();

module.exports = {
	plugins: { ...baseFile.plugins },
	preRelease: preRelease,
	git: {
		...baseFile.git,
		tagName: `${packageName}-v-${preRelease}`,
		requireBranch: ["beta", "next", "feature/*", "fix/*"],
	},
	npm: {
		...baseFile.npm,
	},
	github: {
		...baseFile.github,
		releaseName: `${packageName}-v${preRelease}`,
	},
	hooks: {
		...baseFile.hooks,
	},
};
