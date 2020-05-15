import React from "react";
import './competition_section.css';
import CompetitionCard from './Cards/competition_section_card'
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
            <div className="competition">
                <Container>
                    <h1>COMPETITION PARTICIPATION</h1>
                    <div style={{display: 'inline'}}>
                        <span>Lorem Ipsum</span>
                    </div>
                    <Row>
                        <Col xs="6" sm="4">
                            <CompetitionCard title="UNIVERSITY ROVER CHALLENGE" subtitle="USA" img={require("./../../assets/img/logo.svg")}/>
                        </Col>
                        <Col xs="6" sm="4">
                            <CompetitionCard title="EUROPEAN ROVER CHALLENGE" subtitle="EUROPE" img={require("./../../assets/img/logo.svg")}/>
                        </Col>
                        <Col sm="4">
                            <CompetitionCard title="INDIA ROVER DESIGN CHALLENGE" subtitle="INDIA, ONGOING" img={require("./../../assets/img/logo.svg")}/>
                        </Col>
                    </Row>
                </Container>


            </div>
        );
    }
}

export default Competition;
