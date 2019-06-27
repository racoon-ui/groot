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

import React from 'react'
import ReactDOM from 'react-dom'
// import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker'

import { HashRouter } from 'react-router-dom'
import './assets/base.css'
import './index.css'
import Main from './Pages/Main'
import configureStore from './config/configureStore'
import { Provider } from 'react-redux'

const store = configureStore()
const rootElement = document.getElementById('root')

const renderApp = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Component />
      </HashRouter>
    </Provider>,
    rootElement
  )
}

renderApp(Main)

if (module.hot) {
  module.hot.accept('./DemoPages/Main', () => {
    const NextApp = require('./DemoPages/Main').default
    renderApp(NextApp)
  })
}
unregister()

// registerServiceWorker();

