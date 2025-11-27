import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Spinner, Button } from "react-bootstrap";
import { CartContext } from "../ContextApi/CartContext";

export const ProductsList = () => {
  const [data, setData] = useState([]);
    const {setCart, cart} = useContext(CartContext)


  useEffect(() => {
    axios
      .get("https://my-site-django-1.onrender.com/mobiles/")
      .then((res) => setData(res.data))
      .catch((er) => console.log(er));
  }, []);

  const AddToCart = (product) =>{

    const checkProduct = cart.some((v)=> v.id === product.id) 
    if(checkProduct){
        alert("already added in cart")
    }else{
        setCart([product ,...cart])
    }
  }

  return (
    <div>
      <div>
        <p className="h3 text-center">Products</p>
      </div>

      {data.length > 0 ? (
        <Container>
            <Row>
                {data.map(product=> <Col>
                    <Card key={product.id} style={{ width:"10rem", height:"17rem"}}>
                        <Card.Header className="w-75">
                        <Card.Img src={product.image_url} />
                        </Card.Header>
                        <Card.Body className="w-20">
                            <Card.Title>
                                {product.title}
                            </Card.Title>
                            <Card.Text>{product.brand}</Card.Text>
                            <Button onClick={()=>AddToCart(product)}>Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>)}
            </Row>
        </Container>
      ) : (
        <div className="text-center">
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </div>
      )}
    </div>
  );
};
