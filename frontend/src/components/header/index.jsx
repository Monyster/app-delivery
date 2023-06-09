import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { HeaderContainer, Nav } from "./styles/header";
import { CartLocalStorageContext } from "../../App";

import configData from "./../../config/configuration.json";

const Header = () => {
  const { cartShop } = useContext(CartLocalStorageContext);

  return (
    <HeaderContainer>
      <Nav>
        <ul>
          <li>
            <NavLink
              to={`/`}
              className={({ isActive }) => (isActive ? "link-active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/history`}
              className={({ isActive }) => (isActive ? "link-active" : "")}
            >
              History
            </NavLink>
          </li>
          {cartShop ? (
            <li>
              <NavLink
                to={`/cart`}
                className={({ isActive }) => (isActive ? "link-active" : "")}
              >
                Cart
              </NavLink>
            </li>
          ) : (
            <li>Cart is empty.</li>
          )}
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
