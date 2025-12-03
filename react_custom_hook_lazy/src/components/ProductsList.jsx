import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../HOC/fetch";

export const ProductsList = () => {
  const navigate = useNavigate();

//  const url = "https://fakestoreapi.com/products";
  const obj = {url: "https://fakestoreapi.com/products", method:"get"}
  const products = useFetch(obj);

  return (
    <div>
      {products === null ? (
        <h3>Loading</h3>
      ) : (
        products.map((item) => (
          <Card
            key={item.id}
            style={{ width: "15rem" }}
            onClick={() => navigate("/productdetails/" + item.id)}
          >
            <Card.Img src={item.image} />
            <Card.Title> {item.title}</Card.Title>
          </Card>
        ))
      )}
    </div>
  );
};
