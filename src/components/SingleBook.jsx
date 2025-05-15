import Card from "react-bootstrap/Card";

import { Button, Col } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col key={this.props.book.asin}>
        <Card className="book-cover d-flex flex-column" style={{ width: "18rem" }}>
          {/* mi salvo lo stato opposto dfi quello che trova, con !this.state.selected  */}
          <Card.Img variant="top" src={this.props.book.img} onClick={() => this.setState({ selected: !this.state.selected })} />
          <Card.Body variant="secondary">
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>{this.props.book.category}</Card.Text>
            <Card.Text>{this.props.book.price}$</Card.Text>
            <Button variant="primary">Acquista</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
