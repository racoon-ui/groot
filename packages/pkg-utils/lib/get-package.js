/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2019 Racoon-UI, Inc
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

const fs = require('fs')
const path = require('path')
const readPkgUp = require('read-pkg-up')
const Package = require('@lerna/package')

exports.getPackage = function getPackage (options) {
  const result = readPackage(options)
  return new Package(result.pkg, path.dirname(result.path))
}

exports.getPackageJSON = function getPackageJSON (options) {
  return readPackage(options).pkg
}

exports.getPackagePath = function getPackagePath (options) {
  return readPackage(options).path
}

function readPackage (options) {
  // eslint-disable-next-line no-param-reassign
  options = {
    cwd: process.cwd(),
    normalize: false,
    ...options
  }
  return readPkgUp.sync({
    cwd: fs.realpathSync(options.cwd),
    normalize: options.normalize
  })
}
exports.readPackage = readPackage
