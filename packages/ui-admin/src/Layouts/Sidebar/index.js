/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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

import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import cx from 'classnames'

import Nav from '../Nav/VerticalNavWrapper'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import PerfectScrollbar from 'react-perfect-scrollbar'
import HeaderLogo from '../Logo'

import {
  setEnableMobileMenu
} from '../../reducers/ThemeOptions'

class AppSidebar extends Component {

  state = {};

  toggleMobileSidebar = () => {
      let {enableMobileMenu, setEnableMobileMenu} = this.props
      setEnableMobileMenu(!enableMobileMenu)
  }

  render() {
    let {
      backgroundColor,
      enableBackgroundImage,
      enableSidebarShadow,
      backgroundImage,
      backgroundImageOpacity,
    } = this.props

    return (
      <Fragment>
        <div className="sidebar-mobile-overlay" onClick={this.toggleMobileSidebar}/>
        <ReactCSSTransitionGroup
          component="div"
          className={cx("app-sidebar", backgroundColor, {'sidebar-shadow': enableSidebarShadow})}
          transitionName="SidebarAnimation"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnter={false}
          transitionLeave={false}>
          <HeaderLogo/>
          <PerfectScrollbar>
            <div className="app-sidebar__inner">
              <Nav/>
            </div>
          </PerfectScrollbar>
          <div
            className={cx("app-sidebar-bg", backgroundImageOpacity)}
            style={{
                backgroundImage: enableBackgroundImage ? 'url(' + backgroundImage + ')' : null
            }}>
          </div>
        </ReactCSSTransitionGroup>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
    enableBackgroundImage: state.ThemeOptions.enableBackgroundImage,
    enableSidebarShadow: state.ThemeOptions.enableSidebarShadow,
    enableMobileMenu: state.ThemeOptions.enableMobileMenu,
    backgroundColor: state.ThemeOptions.backgroundColor,
    backgroundImage: state.ThemeOptions.backgroundImage,
    backgroundImageOpacity: state.ThemeOptions.backgroundImageOpacity,
})

const mapDispatchToProps = dispatch => ({

    setEnableMobileMenu: enable => dispatch(setEnableMobileMenu(enable)),

})

export default connect(mapStateToProps, mapDispatchToProps)(AppSidebar)
