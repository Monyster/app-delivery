import React from "react";
import { Product } from "./styles/cart-product";

const CartProduct = ({ product, remove, changeAmount }) => {
  const [amount, setAmount] = React.useState(product.amount);

  return (
    <Product key={product._id}>
      <img src="images.jfif" alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p>{product.price} UAH</p>
      <button
        onClick={() => {
          if (amount + 1 > 10) {
            setAmount(10);
          } else {
            setAmount(amount + 1);
            changeAmount(product._id, 1);
          }
        }}
      >
        +
      </button>
      {product.amount} - {amount}
      <button
        onClick={() => {
          if (amount - 1 === 0) {
            remove(product._id);
          } else {
            setAmount(amount - 1);
            changeAmount(product._id, -1);
          }
        }}
      >
        -
      </button>
    </Product>
  );
};

export default CartProduct;
