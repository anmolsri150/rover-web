import React from "react";
import Contact from './../components/contact_section.jsx';
import Sponsors from './../components/sponsors_section.jsx';
import LANDING_SECTION from "../components/landing_section.jsx";
import Competition from "../components/competition_section.jsx";
import ReactPageScroller from 'react-page-scroller'

import './landing.css'
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Input,
  Container,
  Col
} from "reactstrap";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }
  handlePageChange = number => {
    this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
  };

  render() {    
    return (      
      <React.Fragment>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          customPageNumber={this.state.currentPage}
          animationTimer={600}
        >
          <LANDING_SECTION/>
          <Competition/>
          <Sponsors/>
          <Contact/>
        </ReactPageScroller>
      </React.Fragment>
    );
  }
}

export default Landing;
