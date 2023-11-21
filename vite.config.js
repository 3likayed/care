import {defineConfig,splitVendorChunkPlugin} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression';
export default defineConfig({
    optimizeDeps: {
        include: [
            "@fawmi/vue-google-maps",
            "fast-deep-equal",
        ],
    },
    build: {
        rollupOptions: {
            output:{
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            }
        }
    },
    plugins: [
        splitVendorChunkPlugin(),
        viteCompression(),

        laravel({
            input: ['resources/Dashboard/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    server: {
        hmr: {
            host: 'localhost',
        },
    },
});
