import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import removeConsole from 'vite-plugin-remove-console';
import svgr from 'vite-plugin-svgr';
import tsConfigPaths from 'vite-tsconfig-paths';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';

export default defineConfig({
	server: {
		port: 3000
	},
	plugins: [
		removeConsole(),
		svgr(),
		ViteImageOptimizer(),
		tsConfigPaths({
			projects: ['./tsconfig.json']
		}),
		tanstackStart({
			target: 'cloudflare-pages'
		})
	]
});
