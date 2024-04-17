const version = "${version}";
const packageName = process.env.npm_package_name;
const scope = packageName.split("/")[1];

module.exports = {
	plugins: {
		"@release-it/conventional-changelog": {
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
		commitMessage: `feat(${scope}): released version v${version} [no ci]`,
		requireCommits: true,
		requireCommitsFail: false,
	},
	npm: {
		publish: false,
		versionArgs: ["--workspaces false"],
	},
	github: {
		release: true,
		releaseName: `${packageName}-v${version}`,
	},
	hooks: {
		"before:git:release": ["mvm-update", "git add --all"],
	},
};
