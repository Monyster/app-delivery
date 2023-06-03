import React from "react";
import {
  CartProductsContainer,
  CartProductsList,
} from "./styles/cart-products";
import CartProduct from "../cart-product";

const CartProducts = ({ products, remove, changeAmount }) => {
  return (
    <CartProductsContainer>
      <CartProductsList>
        {products.map((product) => (
          <CartProduct
            key={product._id}
            product={product}
            remove={remove}
            changeAmount={changeAmount}
          ></CartProduct>
        ))}
      </CartProductsList>
    </CartProductsContainer>
  );
};

export default CartProducts;
