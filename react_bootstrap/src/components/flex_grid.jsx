import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";

export const Example_flex_grid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .then((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="w-100 border border-info mx-2 d-flex justify-content-center gap-5 my-5">
        <div>
          <p>hello im div1</p>
        </div>
        <div>
          <p>hello im div2</p>
        </div>
        <div>
          <p>hello im div3</p>
        </div>
        <div>
          <p>hello im div3</p>
        </div>
      </div>

      {data.length > 0  ?  (
        data?.map((item) => (
          <Card className="w-25 m-1">
            <Card.Body>
              <Card.Img src={item.image} />
            </Card.Body>
            <Card.Footer>
              <Card.Text>{item.title}</Card.Text>
              <Card.Title>₹ {item.price}</Card.Title>
            </Card.Footer>
          </Card>
        )) 
      ) :  <Spinner animation="border" role="status">
        Loading
        </Spinner>}

      <Container className="border border-success rounded">
        <Row className="py-3">
          <Col className="border border-info">
            <div>hello im grid col1</div>
          </Col>
          <Col className="border border-danger">
            <div>hello im grid col2</div>
          </Col>
          <Col className="border border-danger">
            <div>hello im grid col2</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
