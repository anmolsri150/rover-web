import React from "react";
import './sponsors_section.css';

// reactstrap components
import {
    Button,
    CardImg,
    CardText,
    CardSubtitle,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    Input,
    Container,
    Col,
    Row
} from "reactstrap";

class Competition extends React.Component {
    constructor(props) {
        super(props);
        }

    render() {
        return (
            <div className="sponsors">
                <Container>
                    <h1>COMPETITION PARTICIPATION</h1>
                    <div style={{display: 'inline'}}>
                        <span>Lorem Ipsum</span>
                    </div>
                    <Row>
                        <Col xs="6" sm="4">
                            <Card>
                                <CardImg top width="100%" src={require("./../../assets/img/logo.svg")} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                </CardBody>

                            </Card>
                        </Col>
                        <Col xs="6" sm="4">
                            <Card>
                                <CardImg top width="100%" src={require("./../../assets/img/logo.svg")} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                </CardBody>

                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card>
                                <CardImg top width="100%" src={require("./../../assets/img/logo.svg")} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                </CardBody>

                            </Card>
                        </Col>
                    </Row>

                </Container>


            </div>
        );
    }
}

export default Competition;
