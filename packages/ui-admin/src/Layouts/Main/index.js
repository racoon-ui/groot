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

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import React, {Suspense, lazy, Fragment} from 'react'

import {
    ToastContainer,
} from 'react-toastify'

const Dashboards = lazy(() => import('../../Pages/Dashboards'))

const AppMain = () => {
  return (
    <Fragment>
      {/* Dashboards */}
      <Suspense fallback={
        <div className="loader-container">
          <div className="loader-container-inner">
            <h6 className="mt-3">
              Please wait while we load all the Dashboards examples
              <small>Because this is a demonstration, we load at once all the Dashboards examples. This wouldnt happen in a real live app!</small>
            </h6>
          </div>
        </div>
      }>
        <Route path="/dashboards" component={Dashboards}/>
      </Suspense>

      <Route exact path="/" render={() => (
        <Redirect to="/dashboards/basic"/>
      )}/>
      <ToastContainer/>
    </Fragment>
  )
}

export default AppMain
