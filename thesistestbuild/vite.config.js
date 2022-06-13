import { defineConfig,config } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'

import mkcert from 'vite-plugin-mkcert'

const path = require('path')
// https://vitejs.dev/config/

const ignoredElement=[
  'a-scene',
  'a-asset-item',
  'a-image',
  'a-curvedimage',
  'a-assets',
  'a-text',
  'a-plane',
  'a-cylinder',
  'a-rounded',
  'a-light',
  'a-entity',
  'a-camera',
  'a-box',
  'a-sky',
  'a-cursor',
  'a-gltf-model',
  'a-triangle',
  'a-cubemap'
]
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
    mkcert() 
  ],
  ignoredElement,
  publicpath:'/vitevercel/thesistestbuild',
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  compilerOptions: {
    isCustomElement: () => true
  },
  build:{
    chunkSizeWarningLimit: 1500,
  },
  server:{
    https: true ,
    // origin:"http://localhost:3000/",
    host: '0.0.0.0',
    fs: {
        strict: true,
    }
  }
  
  /* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ]
  },
  */
})
