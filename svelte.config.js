import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
	// Consult https://svelte.dev/docs#compile-time-svelte-preprocess
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	env: {
		VITE_API_URL: process.env.VITE_API_URL,
	},
};
