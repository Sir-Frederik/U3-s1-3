import Card from "react-bootstrap/Card";

import { Button, Col } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <Col key={props.book.asin}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body variant="secondary">
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>{props.book.category}</Card.Text>
          <Card.Text>{props.book.price}$</Card.Text>
          <Button variant="primary">Acquista</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default SingleBook;
