const { execSync } = require("child_process");

const getPreReleaseTag = () => {
	const branchName = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
	// Replace slashes and other special characters with hyphens
	return branchName.replace(/\/|[^a-zA-Z0-9]/g, "-");
};

module.exports = {
	extends: "./.release-it.js",
	requireBranch: ["beta", "next", "feature/*", "fix/*"],
	preRelease: getPreReleaseTag(),
};
