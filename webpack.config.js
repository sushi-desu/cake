const path = require('path');

module.exports = {

  entry: {
    background: path.join(__dirname, 'src', 'background', 'background.ts'),
    content: path.join(__dirname, 'src', 'content', 'content.ts'),
    popup: path.join(__dirname, 'src', 'popup', 'popup.ts'),
    options: path.join(__dirname, 'src', 'options', 'options.ts')
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  },

  plugins: []
}
