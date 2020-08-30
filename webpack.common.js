var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: './src/vendor.js'
  },
  module: {
    rules: [
      /* moved seperately to dev and prod since we are using css extract
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. injects styles into DOM
          'css-loader',   // 2. turns css into commonJS
          'sass-loader'   // 1. turns scss into css
        ],
      },
      */
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: "[name].[hash].[ext]",
            outputPath: 'imgs'
          }
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/template.html'
  })]
}