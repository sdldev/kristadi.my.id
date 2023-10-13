import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Kristadi Docs',
			social: {
				github: 'https://kristadi.my.id',
			},
			sidebar: [
				{
					label: 'LMS',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Intro', link: '/lms/intro/' },
					],
				},
				{
					label: 'Erapor',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Intro', link: '/erapor/intro/' },
					],
				},
				{
					label: 'ANBK',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Intro', link: '/anbk/intro/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
