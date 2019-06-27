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

import React, {Fragment} from 'react'
import {connect} from 'react-redux'

import Hamburger from 'react-hamburgers'

import cx from 'classnames'

import {
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {
  Button
} from 'reactstrap'

import {
  setEnableMobileMenu,
  setEnableMobileMenuSmall,
} from '../../reducers/ThemeOptions'

class AppMobileMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      mobile: false,
      activeSecondaryMenuMobile: false
    }
  }

  toggleMobileSidebar = () => {
    let {enableMobileMenu, setEnableMobileMenu} = this.props
    setEnableMobileMenu(!enableMobileMenu)
  }

  toggleMobileSmall = () => {
    let {enableMobileMenuSmall, setEnableMobileMenuSmall} = this.props
    setEnableMobileMenuSmall(!enableMobileMenuSmall)
  }

  state = {
    openLeft: false,
    openRight: false,
    relativeWidth: false,
    width: 280,
    noTouchOpen: false,
    noTouchClose: false,
  };

  render() {
    let {
      enableMobileMenu,
    } = this.props

    return (
      <Fragment>
        <div className="app-header__mobile-menu">
          <div onClick={this.toggleMobileSidebar}>
            <Hamburger
              active={enableMobileMenu}
              type="elastic"
              onClick={() => this.setState({activeMobile: !this.state.activeMobile})}
            />
          </div>
        </div>
        <div className="app-header__menu">
          <span onClick={this.toggleMobileSmall}>
            <Button size="sm"
                    className={cx("btn-icon btn-icon-only", {active: this.state.activeSecondaryMenuMobile})}
                    color="primary"
                    onClick={() => this.setState({activeSecondaryMenuMobile: !this.state.activeSecondaryMenuMobile})}>
              <div className="btn-icon-wrapper"><FontAwesomeIcon icon={faEllipsisV}/></div>
            </Button>
          </span>
        </div>
      </Fragment>
    )
  }
}


const mapStateToProps = state => ({
    closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
    enableMobileMenu: state.ThemeOptions.enableMobileMenu,
    enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
})

const mapDispatchToProps = dispatch => ({

    setEnableMobileMenu: enable => dispatch(setEnableMobileMenu(enable)),
    setEnableMobileMenuSmall: enable => dispatch(setEnableMobileMenuSmall(enable)),

})

export default connect(mapStateToProps, mapDispatchToProps)(AppMobileMenu)
