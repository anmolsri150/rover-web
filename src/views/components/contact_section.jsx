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
            <section className="contact fullpage-section">
                <Row>
                    <Col xs="5" style={{'padding-top': '15vh'}}>
                        <h1 className='head'>CONTACT US</h1>
                        <span>Get in Touch</span>
                    </Col>
                    <Col xs="7"><img className='cont' src={require("./../../assets/img/Image 9.png")} /></Col>
                    {/* <Col xs="7"><img src={require("./../../assets/img/logo.svg")} /></Col> */}
                </Row>
            </section>
        );
    }
}

export default Contact;
