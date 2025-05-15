import { Col, Container, Row } from "react-bootstrap";

import SingleBook from "./SingleBook";

const BookList = (props) => {
  return (
    <Container>
      <h2> Libri Disponibili </h2>

      <Row xs={1} sm={2} md={3} lg={4} xxl={6} className="g-*">
        {props.genre.map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
