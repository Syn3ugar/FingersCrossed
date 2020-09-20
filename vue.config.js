module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [], // 省略后缀名的配置
      alias: {
        // 默认 '@': 'src'
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        // 'router': '@/router' 不需要给router和store配置别名，因为有this.$router和this.$store
      }
    }
  }
}
