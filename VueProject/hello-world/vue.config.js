// vue.config.js
const path = require('path') // 引入path模块
const isProd = process.env.NODE_ENV == 'production';

module.exports = {
  lintOnSave: true,
  // !!!设置为空串或者是./，可以将项目部署到服务器的任意目录
  publicPath: '/app1/' ,
  devServer: {
    proxy: {
      '/api': {
        target: isProd ? 'http://localhost:18090' : 'http://localhost:18091',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api':''
        }
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  },
  /* configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }, */
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.join(__dirname, 'src'))
      .set('@assets', path.join(__dirname, 'src/assets'))
  }
}