interface Emoji {
	readonly label: any;
	readonly code: any;
	readonly description: any;
}
let emojis: Array<Emoji> = [
	{ label: "🎉", code: ':tada:', description: "Initial commit." },
	{ label: "🚧", code: ':construction:', description: "Work in progress." },
	{ label: "🐛", code: ':bug:', description: "Fixing a bug" },
	{ label: "⚡️", code: ':zap:', description: "Improving performance." },
	{ label: "✨", code: ':sparkles:', description: "Introducing new features." },
	{ label: "🔥", code: ':fire:', description: "Removing code or files." },
	{ label: "🎨", code: ':art:', description: "Improving structure / format of the code." },
	{ label: "🔖", code: ':bookmark:', description: "Releasing / Version tags." },
	{ label: "🚑", code: ':ambulance:', description: "hotfix" },
	{ label: "💄", code: ':lipstick:', description: "Updating the UI and style files." },
	{ label: "🌐", code: ':globe_with_meridians:', description: "i18n and localization." },
	{ label: "♻️", code: ':recycle:', description: "refactoring" },
	{ label: "🔨", code: ':hammer:', description: "refactoring" },
	{ label: "📦", code: ':package:', description: "Updating compiled files or packages." },
	{ label: "✏️", code: ':pencil2:', description: "Fixing typos." },
	{ label: "📝", code: ':memo:', description: "Writing docs." },
	{ label: "✅", code: ':white_check_mark:', description: "Updating tests." },
	{ label: "🎬", code: ':clapper:', description: "Update examples/demos" },
	{ label: "🔒", code: ':lock:', description: "Fixing security issues." },
	{ label: "🚨", code: ':rotating_light:', description: "Removing linter warnings." },
	{ label: "🔧", code: ':wrench:', description: "Changing configuration files." },
	{ label: "➕", code: ':heavy_plus_sign:', description: "Adding a dependency." },
	{ label: "➖", code: ':heavy_minus_sign:', description: "Removing a dependency." },
	{ label: "⬆️", code: ':arrow_up:', description: "Upgrading dependencies." },
	{ label: "⬇️", code: ':arrow_down:', description: "Downgrading dependencies." },
	{ label: "🐎", code: ':racehorse:', description: "Improve performance." },
	{ label: "📈", code: ':chart_with_upwards_trend:', description: "Adding analytics or tracking code." },
	{ label: "🚀", code: ':rocket:', description: "Deploying stuff." },
	{ label: "👷", code: ':construction_worker:', description: "Adding CI build system." },
	{ label: "💚", code: ':green_heart:', description: "Fixing CI Build." },
	{ label: "🐳", code: ':whale:', description: "Work about Docker." },
	{ label: "🍏", code: ':green_apple:', description: "Fixing something on iOS." },
	{ label: "🤖", code: ':robot:', description: "Fixing something on Android." },
	{ label: "🍎", code: ':apple:', description: "Fixing something on macOS." },
	{ label: "🐧", code: ':penguin:', description: "Fixing something on Linux." },
	{ label: "🏁", code: ':checkered_flag:', description: "Fixing something on Windows." }
];
export { emojis };
