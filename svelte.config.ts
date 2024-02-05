import adapter from '@sveltejs/adapter-vercel';
import { Config } from '@sveltejs/kit';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config: Config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	runtime: 'nodejs18.x',
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;