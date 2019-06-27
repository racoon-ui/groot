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

import {
  DropdownToggle, DropdownMenu,
  Nav, Button, NavItem, NavLink,
  UncontrolledTooltip, UncontrolledButtonDropdown
} from 'reactstrap'

import {
  toast,
  Bounce
} from 'react-toastify'


import {
  faCalendarAlt,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import avatar1 from '../../../assets/utils/images/avatars/1.jpg'

class UserBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }

  notify2 = () => this.toastId = toast("You don't have any new items in your calendar for today! Go out and play!", {
    transition: Bounce,
    closeButton: true,
    autoClose: 5000,
    position: 'bottom-center',
    type: 'success'
  });


  render() {
    return (
      <Fragment>
        <div className="header-btn-lg pr-0">
          <div className="widget-content p-0">
            <div className="widget-content-wrapper">
              <div className="widget-content-left">
                <UncontrolledButtonDropdown>
                  <DropdownToggle color="link" className="p-0">
                    <img width={42} className="rounded-circle" src={avatar1} alt=""/>
                    <FontAwesomeIcon className="ml-2 opacity-8" icon={faAngleDown}/>
                  </DropdownToggle>
                  <DropdownMenu right className="rm-pointers dropdown-menu-lg">
                    <Nav vertical>
                      <NavItem className="nav-item-header">
                        Activity
                      </NavItem>
                      <NavItem>
                        <NavLink href="javascript:void(0);">
                          Chat
                          <div className="ml-auto badge badge-pill badge-info">8</div>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="javascript:void(0);">Recover Password</NavLink>
                      </NavItem>
                      <NavItem className="nav-item-header">
                        My Account
                      </NavItem>
                      <NavItem>
                        <NavLink href="javascript:void(0);">
                          Settings
                          <div className="ml-auto badge badge-success">New</div>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="javascript:void(0);">
                          Messages
                          <div className="ml-auto badge badge-warning">512</div>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="javascript:void(0);">
                          Logs
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </div>
              <div className="widget-content-left  ml-3 header-user-info">
                <div className="widget-heading">
                  Alina Mclourd
                </div>
                <div className="widget-subheading">
                  VP People Manager
                </div>
              </div>
              <div className="widget-content-right header-user-info ml-3">
                <Button className="btn-shadow p-1" size="sm" onClick={this.notify2} color="info" id="Tooltip-1">
                  <FontAwesomeIcon className="mr-2 ml-2" icon={faCalendarAlt}/>
                </Button>
                <UncontrolledTooltip placement="bottom" target={'Tooltip-1'}>
                  Click for Toastify Notifications!
                </UncontrolledTooltip>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default UserBox
