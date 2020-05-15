import React from "react";
import './sponsors.css';

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

class Sponsors extends React.Component {
    constructor(props) {
        super(props);
        }

    render() {
        return (
            <div className="sponsors">
                <Container>
                    <Row className="first-row">
                        <Col xs="6" sm="4">
                            <Card>
                                <CardImg top width="100%" src={require('./../../assets/img/logo.svg')} alt="Card image cap" />

                            </Card>
                        </Col>
                        <Col xs="6" sm="4">
                            <Card>
                                <CardImg top width="100%" src={require('./../../assets/img/logo.svg')} alt="Card image cap" />

                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card>
                                <CardImg top width="100%" src={require('./../../assets/img/logo.svg')} alt="Card image cap" />

                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="6" sm="4">
                            <Card>
                                <CardImg top width="100%" src={require('./../../assets/img/logo.svg')} alt="Card image cap" />

                            </Card>
                        </Col>
                        <Col xs="6" sm="4">
                            <Card>
                                <CardImg top width="100%" src={require('./../../assets/img/logo.svg')} alt="Card image cap" />

                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card>
                                <CardImg top width="100%" src={require('./../../assets/img/logo.svg')} alt="Card image cap" />

                            </Card>
                        </Col>
                    </Row>
                </Container>


            </div>
        );
    }
}

export default Sponsors;
