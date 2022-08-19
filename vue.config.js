// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://124.220.158.211:5000/',// 后端接口
//         changeOrigin: true, // 是否跨域
//         pathRewrite: {
//           '^/api': '/'
//         }
//       }
//     }
//   }
// }
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
      proxy: {
          '/api/': {
              target: 'http://124.220.158.211:5000/',
              // ↑这个就是你的接口地址↑
              changeOrigin: true,
              pathRewrite: {
                  '^/api': '/api'
              }
          }
      }
  }
})
