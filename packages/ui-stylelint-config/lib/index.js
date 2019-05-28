/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present ST Unitas, Inc.
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

module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [ 'stylelint-declaration-strict-value' ],
  rules: {
    'scale-unlimited/declaration-strict-value': [[ 'z-index' ]],

    'block-no-empty': null,
    'unit-blacklist': ['px'],
    'color-no-hex': true,
    'color-named': 'never',
    'declaration-no-important': true,
    'value-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'max-nesting-depth': [ 2, {
      ignore: ['blockless-at-rules']
    }],
    'number-max-precision': 4,
    'string-quotes': 'double',
    'time-min-milliseconds': 100,
    'no-unknown-animations': true,

    'selector-max-class': 2,
    'selector-max-id': 0,
    'selector-max-type': 0,
    'selector-max-universal': 0,
    'selector-no-vendor-prefix': true,
    'selector-class-pattern': '^[a-z]+[a-zA-Z0-9\\-]*[a-zA-Z0-9]*$',

    'declaration-property-value-blacklist': {
      'text-align': [ 'left', 'right' ],
      'float': [ 'left', 'right' ],
      'clear': [ 'left', 'right' ]
    },

    'property-blacklist': [
      'padding-left',
      'padding-right',
      'border-left',
      'border-right',
      'border-left-color',
      'border-right-color',
      'border-left-style',
      'border-right-style',
      'border-left-width',
      'border-right-width',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-left-radius',
      'border-bottom-right-radius',
      'margin-left',
      'margin-right',
      'left',
      'right'
    ]
  }
}
