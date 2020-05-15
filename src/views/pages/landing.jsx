import React from "react";
import Contact from './../components/contact_section';
import Sponsors from './../components/sponsors_section';
import LANDING_SECTION from "../components/landing_section";
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
  // componentDidMount() {
  //   document.body.classList.toggle("lock-page");
  // }
  // componentWillUnmount() {
  //   document.body.classList.toggle("lock-page");
  // }
  render() {
    return (
      <div className="lock-page">
        <LANDING_SECTION>

        </LANDING_SECTION>
        <Sponsors>

        </Sponsors>
        <Contact>

        </Contact>

        {/*<Container>*/}
        {/*  <Col className="ml-auto mr-auto" lg="4" md="6">*/}
        {/*    <Card className="card-lock text-center">*/}
        {/*      <CardHeader>*/}
        {/*      </CardHeader>*/}
        {/*      <CardBody>*/}
        {/*        <CardTitle tag="h4">Joe Gardner</CardTitle>*/}
        {/*        <FormGroup>*/}
        {/*          <Input*/}
        {/*            placeholder="Enter Password.."*/}
        {/*            type="password"*/}
        {/*            autoComplete="off"*/}
        {/*          />*/}
        {/*        </FormGroup>*/}
        {/*      </CardBody>*/}
        {/*      <CardFooter>*/}
        {/*        <Button*/}
        {/*          className="btn-round"*/}
        {/*          color="default"*/}
        {/*          href="#pablo"*/}
        {/*          onClick={e => e.preventDefault()}*/}
        {/*          outline*/}
        {/*        >*/}
        {/*          Unlock*/}
        {/*        </Button>*/}
        {/*      </CardFooter>*/}
        {/*    </Card>*/}
        {/*  </Col>*/}
        {/*</Container>*/}
        {/*<div*/}
        {/*  className="full-page-background"*/}
        {/*/>*/}
      </div>
    );
  }
}

export default Landing;
