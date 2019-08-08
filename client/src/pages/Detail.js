import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
    state = {
        book: {}
    };

    // Grab book with the id of this.props.match.params.id
    componentDidMount() {
        API.getBook(this.props.match.params.id)
            .then(res => this.setState({ book: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>
                                {this.state.book.title} by {this.state.book.author}
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>

                <Row>
                    <Col size="md-10 md-offset-1">
                        <article>
                            <h1>Synopsis</h1>
                            <p>
                                {this.state.book.synopsis}
                            </p>
                        </article>
                    </Col>
                </Row>

                <Row>
                    <Col size="md-2">
                        <Link to="/">Back</Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Detail;