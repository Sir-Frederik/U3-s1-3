import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import scifi from "../data/scifi.json";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import romance from "../data/romance.json";
import horror from "../data/horror.json";
import { Col, Container, Row } from "react-bootstrap";
import { Component } from "react";
import SingleBook from "./SingleBook";

class AllTheBooks extends Component {
  state = {
    collection: scifi,
  };
  render() {
    return (
      <Container>
        <h2> Libri Disponibili </h2>
        <div className="d-flex gap-1 my-2">
          <Button variant="primary" onClick={() => this.setState({ collection: scifi })}>
            Scifi
          </Button>
          <Button variant="success" onClick={() => this.setState({ collection: fantasy })}>
            Fantasy
          </Button>
          <Button variant="danger" onClick={() => this.setState({ collection: history })}>
            History
          </Button>
          <Button variant="dark" onClick={() => this.setState({ collection: horror })}>
            Horror
          </Button>
          <Button variant="warning" onClick={() => this.setState({ collection: romance })}>
            Romance
          </Button>
        </div>
        <Row xs={1} sm={2} md={3} lg={4} xxl={6} className="g-*">
          {this.state.collection.map((book) => (
            <SingleBook key={book.asin} book={book} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
