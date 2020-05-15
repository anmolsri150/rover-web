import React from "react";

import './presentation.css'
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

class Presentation extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("lock-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("lock-page");
  }
  render() {
    return (
      <div className="lock-page">
        <Container>
          <Col className="ml-auto mr-auto" lg="4" md="6">
            <Card className="card-lock text-center">
              <CardHeader>
              </CardHeader>
              <CardBody>
                <CardTitle tag="h4">Joe Gardner</CardTitle>
                <FormGroup>
                  <Input
                    placeholder="Enter Password.."
                    type="password"
                    autoComplete="off"
                  />
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button
                  className="btn-round"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                  outline
                >
                  Unlock Present
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Container>
        <div
          className="full-page-background"
        />
      </div>
    );
  }
}

export default Presentation;
