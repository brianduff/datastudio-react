const path = require('path')
const isProduction = process.env.NODE_ENV == 'production'

const config = {
  entry: './built-tsc/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'viz.js',
  }
}

module.exports = () => {
  config.mode = isProduction ? "production" : "development"
  return config
}
