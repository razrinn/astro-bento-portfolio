import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import UnoCSS from '@unocss/astro';
import icon from 'astro-icon';

import { remarkReadingTime } from './src/lib/ remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://yzrin.com/',
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        'https://yzrin.com/sitemap-index.xml',
        'https://yzrin.com/sitemap-0.xml',
      ],
    }),
    UnoCSS({ injectReset: true }),
    icon(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
