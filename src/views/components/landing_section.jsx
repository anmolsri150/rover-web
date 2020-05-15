import React from "react";
import './landing_section.css'

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

class LANDING_SECTION extends React.Component {

    render() {
        return (
            <section className="landing fullpage-section">
                <Row>
                    <Col xs="6" className="text_section">
                        <h1 className='title'>TEAM ANTARIKSH</h1>
                        <span className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    </Col>
                    <Col xs="6"><img src={require("./../../assets/img/logo.svg")} /></Col>
                </Row>
            </section>
        );
    }
}

export default LANDING_SECTION;
