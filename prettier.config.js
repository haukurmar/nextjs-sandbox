module.exports = {
	semi: true,
	useTabs: true,
	tabWidth: 4,
	printWidth: 120,
	singleQuote: false,
	jsxBracketSameLine: false,
	trailingComma: "all",
	overrides: [
		{
			files: "*.json",
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
		{
			files: "*.yml",
			options: {
				useTabs: true,
				tabWidth: 2,
			},
		},
	],
	editorconfig: true,
};
