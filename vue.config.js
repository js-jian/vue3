module.exports = {
  publicPath: '/',
  outputDir: 'dist', // 输出文件目录，该目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)
  assetsDir: 'static', // 放置生成的静态资源 (js、css、img、fonts) 的目录
  lintOnSave: true, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  productionSourceMap: false, // 如果不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set("@", "src") // 设置别名，@可以不设置，默认表示 src目录
  // },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 生产环境配置
    } else {
      // 开发环境配置
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        // plugins: {
        //   'autoprefixer': {}, // css前缀
        // }
        plugins: [
          require('autoprefixer') // css前缀
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: "http://localhost:9999",
        secure: false,  // 如果是https接口，需要配置这个参数为true
        changeOrigin: true, // 设置成true：发送请求头中host会设置成target
        pathRewrite: {
          '^/api': '/api' // // 路径重写
        }
      }
    },
  },
}