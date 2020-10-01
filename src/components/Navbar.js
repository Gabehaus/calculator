import React, { Component } from "react";
import "../App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Fragment>
          <Navbar id="navbar" light expand="md">
            <NavbarBrand href="/" id="navElementA">
              Calculator
            </NavbarBrand>
          </Navbar>
        </Fragment>
      </div>
    );
  }
}
