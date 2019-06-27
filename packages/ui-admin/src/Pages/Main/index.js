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

import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import cx from 'classnames'
import {withRouter} from 'react-router-dom'

import ResizeDetector from 'react-resize-detector'

import AppMain from '../../Layouts/Main'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      closedSmallerSidebar: false
    }
  }

  render() {
    let {
      colorScheme,
      enableFixedHeader,
      enableFixedSidebar,
      enableFixedFooter,
      enableClosedSidebar,
      closedSmallerSidebar,
      enableMobileMenu,
      enablePageTabsAlt,
    } = this.props

    return (
      <ResizeDetector
        handleWidth
        render={({ width }) => (
          <Fragment>
            <div className={cx(
                "app-container app-theme-" + colorScheme,
                {'fixed-header': enableFixedHeader},
                {'fixed-sidebar': enableFixedSidebar || width < 1250},
                {'fixed-footer': enableFixedFooter},
                {'closed-sidebar': enableClosedSidebar || width < 1250},
                {'closed-sidebar-mobile': closedSmallerSidebar || width < 1250},
                {'sidebar-mobile-open': enableMobileMenu},
            )}>
              <AppMain/>
            </div>
          </Fragment>
        )}
      />
    )
  }
}

const mapStateToProp = state => ({
  colorScheme: state.ThemeOptions.colorScheme,
  enableFixedHeader: state.ThemeOptions.enableFixedHeader,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  enableFixedFooter: state.ThemeOptions.enableFixedFooter,
  enableFixedSidebar: state.ThemeOptions.enableFixedSidebar,
  enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
  enablePageTabsAlt: state.ThemeOptions.enablePageTabsAlt,

})

export default withRouter(connect(mapStateToProp)(Main))
