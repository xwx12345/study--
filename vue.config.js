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
