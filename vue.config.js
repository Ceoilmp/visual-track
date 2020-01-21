module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'view': '@/view'
      }
    }
  },
  devServer: {
    port: 8082,
    host: '0.0.0.0',
    open: true
  }
}
