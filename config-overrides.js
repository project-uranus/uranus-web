const { override, fixBabelImports } = require('customize-cra')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = override(
  config => ({
    ...config,
    optimization: {
      ...config.optimization,
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_debugger: true,
              drop_console: true
            }
          }
        })
      ]
    }
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  })
)
