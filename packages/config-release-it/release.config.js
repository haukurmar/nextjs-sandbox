const version = "${version}";
const packageName = process.env.npm_package_name;
const scope = packageName.split("/")[1];

module.exports = {
	plugins: {
		"@release-it/conventional-changelog": {
			header: `# Changelog for ${packageName}`,
			path: ".",
			infile: "CHANGELOG.md",
			preset: "conventionalcommits",
			gitRawCommitsOpts: {
				path: ".",
			},
		},
	},
	git: {
		push: true,
		tagName: `${packageName}-v${version}`,

		// pushRepo: mostly needed for in GitHub Actions execution,
		// to force using ssh instead of https in order to push back package.json version bumps and updated mvm.lock and CHANGELOG.md files.
		// pushRepo: "git@github.com:haukurmar/nextjs-sandbox.git",
		commitsPath: ".",
		commitMessage: `chore(release): ${scope} v${version} [skip ci]`,
		requireCommits: true,
		requireCommitsFail: false,
		requireBranch: [
			"main",
			"master",
			"feature/*",
			// { name: "beta", prerelease: true },
			// { name: "next", prerelease: true },
			// { name: "feature/*", prerelease: "${name.replace(/\\//, '-')}" },
			// { name: "fix/*", prerelease: "${name.replace(/\\//, '-')}" },
		],
	},
	npm: {
		publish: true,
		versionArgs: ["--workspaces false"],

		// To ignore the version from package.json, (and use the latest Git tag instead):
		//ignoreVersion: true
	},
	github: {
		release: true,
		releaseName: `${packageName}-v${version}`,
	},
	hooks: {
		"before:git:release": ["mvm-update", "git add --all"],
	},
};
