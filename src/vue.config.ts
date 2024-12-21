// module.exports = {
//     assetsDir:'static',
//     publicPath:'./',
//     parallel:false,
// }

import {defineConfig} from '@vue/cli-service';

export default defineConfig({
    assetsDir: 'static',
    publicPath: './',
    parallel: false,
    filenameHashing:true,
    runtimeCompiler:false,
    productionSourceMap:true,
    outputDir:'dist',
})

// devServer: {
//     proxy: {
//         './': {
//             target: 'http://localhost:5500',
//             changeOrigin: true,
//             pathRewrite: {
//                 './': ''
//             },
//         },
//     },
// },

