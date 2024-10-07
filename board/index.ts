// board/index.js
import { defineNuxtModule } from '@nuxt/kit';
import { resolve } from 'path';

export default defineNuxtModule({
    meta: {
        name: 'board',
        configKey: 'board',
    },

    setup(moduleOptions, nuxt) {
        const themeDir = resolve(__dirname, '..');

        // Adding custom routes
        nuxt.hook('pages:extend', (pages) => {
            pages.push({
                name: 'board-list',
                path: '/board/list',
                file: resolve(themeDir, 'board/pages/list.vue'), // Adjust to your actual page
            });
        });

        // Add a plugin for any additional setup
        // nuxt.addPlugin(resolve(__dirname, 'plugins/add-stores.js'));
    },
});
