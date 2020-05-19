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
            <section className="competition fullpage-section" style={{'padding-top': '15vh'}}>
                <Container>
                    <h1>COMPETITION PARTICIPATION</h1>
                    <div style={{display: 'inline'}}>
                        <span></span>
                    </div>
                    <Row>
                        <Col xs="6" sm="4">
                            <CompetitionCard title="UNIVERSITY ROVER CHALLENGE" subtitle="USA" img={require("./../../assets/img/Image 6.png")}/>
                        </Col>
                        <Col xs="6" sm="4">
                            <CompetitionCard title="EUROPEAN ROVER CHALLENGE" subtitle="EUROPE" img={require("./../../assets/img/Image 3.png")}/>
                        </Col>
                        <Col sm="4">
                            <CompetitionCard title="INDIA ROVER DESIGN CHALLENGE" subtitle="INDIA, ONGOING" img={require("./../../assets/img/Image 7.png")}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Competition;
