import React from "react";
import './contact_section.css'

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

class Contact extends React.Component {

    render() {
        return (
            <div className="contact">
                <Row>
                    <Col xs="6">
                        <h1>CONTACT US</h1>
                    </Col>
                    <Col xs="6"><img src={require("./../../assets/img/logo.svg")} /></Col>
                </Row>
            </div>
        );
    }
}

export default Contact;
