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

const { runCommandsConcurrently, getCommand } = require('@racoon-ui/command-utils')

const {
  BABEL_ENV,
  NODE_ENV,
  DEBUG,
  UNMANGLED_CLASS_NAMES,
  DISABLE_SPEEDY_STYLESHEET
} = process.env

const args = process.argv.slice(2)

// positional: ui-build src --watch
const firstArg = args[0]
const src = (firstArg && firstArg.indexOf('--') < 0) ? firstArg : 'src'

const babelArgs = [src, '--ignore "src/**/*.test.js","src/**/__tests__/**"']

if (args.includes('--copy-files')) {
  babelArgs.push('--copy-files')
}

let envVars

if (args.includes('--watch')) {
  envVars = [
    'NODE_ENV=development',
    'DEBUG=1',
    'UNMANGLED_CLASS_NAMES=1',
    'DISABLE_SPEEDY_STYLESHEET=1'
  ]
  babelArgs.push('--watch')
} else {
  envVars = [
    `NODE_ENV=${BABEL_ENV || NODE_ENV || 'production'}`,
    (DEBUG ? `DEBUG=1` : false),
    (UNMANGLED_CLASS_NAMES  ? `UNMANGLED_CLASS_NAMES=1` : false),
    (DISABLE_SPEEDY_STYLESHEET  ? `DISABLE_SPEEDY_STYLESHEET=1` : false)
  ].filter(Boolean)
}

let modules = ['es', 'cjs']

if (args.includes('--modules')) {
  //  eslint-disable-next-line no-unused-vars
  const [_, arg] = args.splice(args.indexOf('--modules'), 2)
  if (!arg) {
    throw new Error('Missing --modules argument')
  }
  modules = arg.split(',')
  if (modules.some(mod => !['es', 'cjs'].includes(mod))) {
    throw new Error(`Invalid --modules argument: '${arg}'`)
  }
}

const commands = {
  es: getCommand('babel', [...babelArgs, '--out-dir', 'es'], [...envVars, 'ES_MODULES=1']),
  cjs: getCommand('babel', [...babelArgs, '--out-dir', 'lib'], envVars)
}

const commandsToRun = modules.reduce((obj, key) => ({ ...obj, [key]: commands[key] }), {})

process.exit(runCommandsConcurrently(commandsToRun).status)
