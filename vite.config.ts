import { defineConfig } from 'vite';
// import { visualizer } from 'rollup-plugin-visualizer';
import preact from '@preact/preset-vite';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 100,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // if (id.includes('node_modules')) {
          //   // 让每个插件都打包成独立的文件
          //   return id.toString().split('node_modules/')[1].split('/')[0].toString();
          // }

          return 'vendor';
        },
      },
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return;
        }
        warn(warning);
      },
      plugins: [
        viteCompression({
          verbose: true, // 是否在控制台中输出压缩结果
          disable: false,
          threshold: 10240, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
          algorithm: 'gzip', // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
          ext: '.gz',
          deleteOriginFile: false, // 源文件压缩后是否删除
        }),
      ],
    },
  },

  plugins: [
    preact(),
    // visualizer({ open: true })
  ],
});
