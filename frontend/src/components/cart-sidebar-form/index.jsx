import React from "react";
import { CartForm, CartSubmitButton } from "./styles/cart-sidebar-form";

const CartSidebarForm = ({ handleSubmit }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");

  return (
    <CartForm
      onSubmit={(e) => {
        e.preventDefault();

        handleSubmit({
          name,
          email,
          phone,
          address,
        });

        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
      }}
    >
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        placeholder="Matvii"
        name="name"
        id="name"
        pattern="^[a-zA-Z]+$"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        placeholder="email@shop.com"
        name="email"
        id="email"
        pattern="^((?!\.)[\w_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        placeholder="+380661122334"
        name="phone"
        id="phone"
        pattern=".*\+[0-9]{3}?[0-9]{2}?[0-9]{3}?[0-9]{4,5}$"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <label htmlFor="address">Address:</label>
      <input
        type="text"
        placeholder="Address"
        name="address"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <CartSubmitButton type="submit">Submit</CartSubmitButton>
    </CartForm>
  );
};

export default CartSidebarForm;
