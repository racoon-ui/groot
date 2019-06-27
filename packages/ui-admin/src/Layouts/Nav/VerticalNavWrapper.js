/* eslint-disable react/jsx-no-target-blank */
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
import {withRouter} from 'react-router-dom'

import MetisMenu from 'react-metismenu'

import {MainNav, ComponentsNav, FormsNav, WidgetsNav, ChartsNav} from './NavItems'

class Nav extends Component {

  state = {};

  render() {
    return (
      <Fragment>
        <h5 className="app-sidebar__heading">PRO VERSION</h5>
        <div className="metismenu vertical-nav-menu">
          <ul className="metismenu-container">
            <li className="metismenu-item">
              <a className="metismenu-link" href="https://dashboardpack.com/theme-details/architectui-dashboard-react-pro" target="_blank">
                <i className="metismenu-icon pe-7s-diamond"></i>
                Upgrade to PRO
              </a>
            </li>
          </ul>
        </div>
        <h5 className="app-sidebar__heading">Menu</h5>
        <MetisMenu content={MainNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
        <h5 className="app-sidebar__heading">UI Components</h5>
        <MetisMenu content={ComponentsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
        <h5 className="app-sidebar__heading">Widgets</h5>
        <MetisMenu content={WidgetsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
        <h5 className="app-sidebar__heading">Forms</h5>
        <MetisMenu content={FormsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
        <h5 className="app-sidebar__heading">Charts</h5>
        <MetisMenu content={ChartsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
      </Fragment>
    )
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path)
  }
}

export default withRouter(Nav)
