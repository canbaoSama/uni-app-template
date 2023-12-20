import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import UnoCSS from 'unocss/vite'
import path, { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        uni(),
        UnoCSS()
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, './src'),
            },
            {
                find: '@@',
                replacement: resolve(__dirname, './src/assets'),
            },
        ],
    },
    server: {
        host: '0.0.0.0',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://192.168.1.108', // 改成自己后端ip地址
            },
            '/images': {
                target: 'http://192.168.1.108', // 改成自己的图片ip地址
                changeOrigin: true,
                rewrite: path => path.replace(/^\/images/, '/map/images'),
            },
        },
    },
});
