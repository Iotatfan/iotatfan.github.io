const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;

const shouldAnalyze = process.env.ANALYZE === 'true';

module.exports = {
    parallel: false,
    publicPath: '/',
    configureWebpack: {
      plugins: shouldAnalyze ? [new BundleAnalyzerPlugin()] : [],
      devtool: 'source-map'
  }
}
