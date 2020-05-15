import React from "react";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import './navbar.css'
// reactstrap components
import {
  NavbarToggler,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  DropdownToggle,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container
} from "reactstrap";

class NavbarLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor);
  }
  // this function opens and closes the collapse on small devices
  // it also adds navbar-transparent class to the navbar when closed
  // ad bg-white when opened
  toggle = () => {
    let newState = {
      isOpen: !this.isOpen
    };
    this.setState(newState);
  };

  render() {
    return (      
      <div>
        <Navbar className="navbarprops" expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/" className="nav-link">
                  <i className="nc-icon nc-layout-11" />
                  LANDING
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/presentation" className="nav-link">
                  <i className="nc-icon nc-tap-01" />
                  ROVER PRESENTATION
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/team" className="nav-link">
                  <i className="nc-icon nc-key-25" />
                  TEAM
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact" className="nav-link">
                  <i className="nc-icon nc-satisfied" />
                  CONTACT US
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarLanding;
