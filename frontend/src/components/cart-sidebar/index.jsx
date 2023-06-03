import React from "react";
import {
  CartSidebarContainer,
  CartSidebarDetails,
} from "./styles/cart-sidebar";
import CartSidebarForm from "../cart-sidebar-form";

const CartSidebar = ({ handleSubmit, shop = {}, price = +0 }) => {
  return (
    <CartSidebarContainer>
      <CartSidebarDetails>
        <h2>Make order:</h2>
        <div>Shop: {shop.name}</div>
        <div>Price: {+price} UAH</div>
      </CartSidebarDetails>

      <CartSidebarForm handleSubmit={handleSubmit} />
    </CartSidebarContainer>
  );
};

export default CartSidebar;
