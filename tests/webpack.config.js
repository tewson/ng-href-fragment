const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  context: path.resolve(__dirname, '.'),
  entry: {
    app: ['./polyfills.ts', './e2e.ts']
  },
  output: {
    filename: 'app.js',
    publicPath: 'http://localhost:8080/'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          { loader: 'awesome-typescript-loader' }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'e2e.html'
    })
  ],
  devtool: 'source-map'
};