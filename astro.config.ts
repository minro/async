import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// Example: Bare minimum, empty configuration file
// export default {}

// https://astro.build/config
export default defineConfig({
	// your configuration goes here
	// https://docs.astro.build/en/reference/configuration-reference/
	integrations: [react()],
	vite: {
		plugins: [vanillaExtractPlugin()],
	}
});
