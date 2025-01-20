import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel( [ 'resources/js/app.jsx' ] ),
        react(),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
    server: {
        cors: true, // Enable CORS for all requests
        host: '127.0.0.1', // Ensure the host matches Laravel's host
    },
});
