import React from "react";
import './competition_section_card.css';

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

class CompetitionCard extends React.Component {
    constructor(props) {
        super(props);
        }

    render() {
        return (
            <Card className="competition_card">
                <CardImg top width="100%" src={this.props.img} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardSubtitle>{this.props.subtitle}</CardSubtitle>
                </CardBody>
            </Card>
        );
    }
}

export default CompetitionCard;
