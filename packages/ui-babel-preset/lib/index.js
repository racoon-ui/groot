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

const loadConfig = require('@racoon-ui/config-loader')

module.exports = function (context, opts = {
  esModules: false,
  coverage: false,
  node: false,
  removeConsole: false
}) {
  const envPresetConfig = opts.node ? getNodeEnvConfig() : getWebEnvConfig(opts)

  const presets = [
    [require('@babel/preset-env').default, envPresetConfig],
    [require('@babel/preset-react').default, { useBuiltIns: true }]
  ]

  let plugins = [
    require('babel-plugin-macros'),
    require('@babel/plugin-transform-destructuring').default,
    [require('@babel/plugin-proposal-decorators').default, { legacy: true }], // must run before themeable-styles plugin below
    [require('@babel/plugin-proposal-class-properties').default, { loose: true }],
    require('@babel/plugin-proposal-export-default-from').default,
    [require('@babel/plugin-proposal-object-rest-spread').default, { useBuiltIns: true }],
    [require('@babel/plugin-transform-runtime').default, {
      corejs: false,
      regenerator: true,
      helpers: true,
      useESModules: opts.esModules
    }],
    require('@babel/plugin-syntax-dynamic-import').default,
    require('babel-plugin-transform-undefined-to-void'),
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false
      }
    ]
  ]

  if (process.env.NODE_ENV === 'production') {
    plugins.push(
      require('@babel/plugin-transform-react-constant-elements').default
    )
  }

  if (opts.removeConsole) {
    if (typeof opts.removeConsole === 'object') {
      plugins.push(
        [require('babel-plugin-transform-remove-console'), opts.removeConsole]
      )
    } else {
      plugins.push(require('babel-plugin-transform-remove-console'))
    }
  }

  if (opts.node) {
    plugins = plugins.concat([
      require('babel-plugin-transform-ensure-ignore').default,
      require('babel-plugin-dynamic-import-node')
    ])
  }

  if (opts.coverage) {
    plugins = [
      [require('babel-plugin-istanbul').default, {
        include: ['**/src/**/*.js'],
        exclude: [
          '**/*.test.js',
          '**/*.examples.js',
          '**/*.fixture.js',
          '**/*.config.js',
          '**/*.conf.js',
          '__tests__/**',
          '__testfixtures__/**',
          '__examples__/**',
          '__fixtures__/**'
        ]
      }]
    ].concat(plugins)
  }

  return {
    presets,
    plugins
  }
}

function getNodeEnvConfig () {
  return {
    targets: {
      node: 'current'
    },
    modules: 'commonjs',
    include: ['transform-classes']
  }
}

function getWebEnvConfig (opts) {
  return {
    targets: {
      browsers: loadConfig('browserslist', require('@racoon-ui/supported-browsers'))
    },
    useBuiltIns: 'entry',
    corejs: 3,
    modules: opts.esModules ? false : 'commonjs',
    // debug: true, // un-comment if you want to see what browsers are being targeted and what plugins that means it will activate
    exclude: ['transform-typeof-symbol']
  }
}
