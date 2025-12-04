import React from "react";
import { useNavigate } from "react-router-dom";

export const ProductsList = (props) => {
  const { productsData } = props;
  const navigate = useNavigate();
  return (
    <div>
      {productsData.map((product) => (
        <div
          key={product.id}
          onClick={() => navigate("/product/" + product.id)}
        >
          <img
            src={product.image}
            alt={product.image}
            loading="lazy"
            width={"150px"}
          />
          <p>{product.title}</p>
        </div>
      ))}
    </div>
  );
};
