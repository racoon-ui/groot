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

import {
  UncontrolledDropdown, DropdownToggle, DropdownMenu, Nav, NavItem, NavLink,
  Button,
  UncontrolledTooltip
} from 'reactstrap'

import {
  faStar,
  faBusinessTime
} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {
  toast,
  Slide
} from 'react-toastify'

export default class TitleComponent2 extends Component {
  toggle(name) {
    this.setState({
      [name]: !this.state[name],
      progress: 0.5,
    })
  }

  notify22 = () => this.toastId = toast("Another toastify example!!!", {
    transition: Slide,
    closeButton: true,
    autoClose: 5000,
    position: 'bottom-center',
    type: 'success'
  });

  render() {
    return (
      <Fragment>
        <Button className="btn-shadow mr-3" onClick={this.notify22} color="dark" id="Tooltip-123">
          <FontAwesomeIcon icon={faStar}/>
        </Button>
        <UncontrolledTooltip placement="left" target={'Tooltip-123'}>
          Show a Toastify notification example!
        </UncontrolledTooltip>
        <UncontrolledDropdown className="d-inline-block">
          <DropdownToggle color="info" className="btn-shadow" caret>
            <span className="btn-icon-wrapper pr-2 opacity-7">
              <FontAwesomeIcon icon={faBusinessTime}/>
            </span>
            Buttons
          </DropdownToggle>
          <DropdownMenu right>
            <Nav vertical>
              <NavItem>
                <NavLink href="javascript:void(0);">
                  <i className="nav-link-icon lnr-inbox"> </i>
                  <span>Inbox</span>
                  <div className="ml-auto badge badge-pill badge-secondary">86
                  </div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="javascript:void(0);">
                  <i className="nav-link-icon lnr-book"> </i>
                  <span>Book</span>
                  <div className="ml-auto badge badge-pill badge-danger">5</div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="javascript:void(0);">
                  <i className="nav-link-icon lnr-picture"> </i>
                  <span>Picture</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled href="javascript:void(0);">
                  <i className="nav-link-icon lnr-file-empty"> </i>
                  <span>File Disabled</span>
                </NavLink>
              </NavItem>
            </Nav>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Fragment>
    )
  }
}
