
import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch } from "react-router-dom";

import NavbarLanding from "../components/Navbar/Navbar";

import routes from "../routes.js";

var ps;

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "black",
      activeColor: "info",
      sidebarMini: false
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(this.refs.mainPanel);
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      if (prop.layout === "/layout") {
        return (
          <Route
            exact path={prop.path}
            component={prop.component}
            key={key}
          />
        );
        console.log(prop.path)
      } else {
        return null;
      }
    });
  };
  handleActiveClick = color => {
    this.setState({ activeColor: color });
  };
  handleBgClick = color => {
    this.setState({ backgroundColor: color });
  };
  handleMiniClick = () => {
    if (document.body.classList.contains("sidebar-mini")) {
      this.setState({ sidebarMini: false });
    } else {
      this.setState({ sidebarMini: true });
    }
    document.body.classList.toggle("sidebar-mini");
  };
  render() {
    return (
      <div className="wrapper">
        <div className="main-panel" ref="mainPanel">
          <NavbarLanding {...this.props} handleMiniClick={this.handleMiniClick} />
          <Switch>{this.getRoutes(routes)}</Switch>
        </div>
      </div>
    );
  }
}

export default Layout;
