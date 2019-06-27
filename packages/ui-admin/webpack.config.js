/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2019 Racoon-UI, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const path = require('path')
const baseConfig = require('@racoon-ui/ui-webpack-config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const outputPath = path.resolve(__dirname, '__build__')

module.exports = {
  ...baseConfig,
  mode: process.env.NODE_ENV || 'production',
  entry: {
    // Note: these entries have to keep these names so that old codepens still work
    common: [
      '@racoon-ui/ui-polyfill-loader!',
      'react',
      'react-dom'
    ],
    index: './src/index.js'
  },
  output: {
    path: outputPath,
    filename: '[name].bundle.[hash].js'
  },
  devServer: {
    disableHostCheck: true,
    contentBase: outputPath,
    host: '0.0.0.0'
  },
  plugins: [
    ...baseConfig.plugins,
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
