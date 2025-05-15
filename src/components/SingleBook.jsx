const SingleBook = (props) => {
  <Col key={props.book.asin}>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.book.img} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>{props.book.category}</Card.Text>
        <Card.Text>{props.book.price}$</Card.Text>
        <Button variant="primary">Acquista</Button>
      </Card.Body>
    </Card>
  </Col>;
};
export default SingleBook;
