const path = require('path')
const common = require('./webpack.common')
const {merge} = require('webpack-merge')
const {CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // use this plugin to minify css.  If this is used, it overrides
                                                                             // minification caused by mode: production. therfore use terser-webpack-plugin
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common,{
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // used to paste the .css in dist into html using link tag
          // this makes sure that css is loaded before dom is rendered
          MiniCssExtractPlugin.loader, // 3. extract css into files
          'css-loader',   // 2. turns css into commonJS
          'sass-loader'   // 1. turns scss into css
        ],
      }
    ]
  },
  // CleanWebpackPlugin() is used to delete the dist folder before building and after building, that file will get created again
  // so that hashed file will not be present

  // MiniCssExtractPlugin is used to extract css so that it loads before dom is loaded
  plugins: [ 
   new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }),
   new CleanWebpackPlugin() ]
})
