import React from "react";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

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
      collapseOpen: false,
      color: "navbar-transparent",
      toggle: false,
      isOpen: false
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor);
  }
  // this function opens and closes the collapse on small devices
  // it also adds navbar-transparent class to the navbar when closed
  // ad bg-white when opened
  toggleCollapse = () => {
    let newState = {
      collapseOpen: !this.state.collapseOpen
    };
    if (!this.state.collapseOpen) {
      newState["color"] = "bg-white";
    } else {
      newState["color"] = "navbar-transparent";
    }
    this.setState(newState);
  };
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={this.state.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
                <NavLink to="/" className="nav-link">
                  <i className="nc-icon nc-layout-11" />
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/app" className="nav-link">
                  <i className="nc-icon nc-book-bookmark" />
                  App
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/presentation" className="nav-link">
                  <i className="nc-icon nc-tap-01" />
                  Presentation
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact" className="nav-link">
                  <i className="nc-icon nc-satisfied" />
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/team" className="nav-link">
                  <i className="nc-icon nc-key-25" />
                  Team
                </NavLink>
              </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
      // <Navbar
      //   className={classnames("navbar-absolute fixed-top", this.state.color)}
      //   expand="lg"
      // >
      //   <Container>
      //     <div className="navbar-wrapper">
      //       <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
      //         Paper Dashboard PRO React
      //       </NavbarBrand>
      //     </div>
      //     <button
      //       aria-controls="navigation-index"
      //       aria-expanded={true}
      //       aria-label="Toggle navigation"
      //       className="navbar-toggler"
      //       data-toggle="collapse"
      //       type="button"
      //       onClick={this.toggleCollapse}
      //     >
      //       <span className="navbar-toggler-bar navbar-kebab" />
      //       <span className="navbar-toggler-bar navbar-kebab" />
      //       <span className="navbar-toggler-bar navbar-kebab" />
      //     </button>
      //     <Collapse
      //       isOpen={this.state.collapseOpen}
      //       className="justify-content-end"
      //       navbar
      //     >
      //       <Nav navbar>
      //         <NavItem>
      //           <NavLink to="/" className="nav-link">
      //             <i className="nc-icon nc-layout-11" />
      //             Dashboard
      //           </NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink to="/app" className="nav-link">
      //             <i className="nc-icon nc-book-bookmark" />
      //             App
      //           </NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink to="/presentation" className="nav-link">
      //             <i className="nc-icon nc-tap-01" />
      //             Presentation
      //           </NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink to="/contact" className="nav-link">
      //             <i className="nc-icon nc-satisfied" />
      //             Contact
      //           </NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink to="/team" className="nav-link">
      //             <i className="nc-icon nc-key-25" />
      //             Team
      //           </NavLink>
      //         </NavItem>
      //       </Nav>
      //     </Collapse>
      //   </Container>
      // </Navbar>
    );
  }
}

export default NavbarLanding;
