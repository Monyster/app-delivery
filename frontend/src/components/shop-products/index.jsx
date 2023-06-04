import React from "react";
import {
  ShopProductCard,
  ShopProductsContainer,
  ShopProductsHeader,
  ShopProductsList,
} from "./styles/shop-products";

import configData from "./../../config/configuration.json";

const ShopProducts = ({ addToCart, removeFromCart, cart = [], shop }) => {
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    try {
      fetch(`${configData.SERVER_URL}/shop/${shop._id}`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.products);
          setLoading(false);
        })
        .catch(() => {
          throw new Error(
            `Something with server... (${configData.SERVER_URL}/shop/${shop._id})`
          );
        });
    } catch (error) {
      throw new Error(error.message);
    }
  }, [shop]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ShopProductsContainer>
      <ShopProductsHeader>{shop.name}</ShopProductsHeader>
      <ShopProductsList>
        {products.map((product) => (
          <ShopProductCard key={product._id}>
            <img src="./images.jfif" alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>{product.price} UAH</p>
            {cart.includes(product._id) ? (
              <button
                onClick={() => removeFromCart(product.shopId, product._id)}
              >
                Remove from cart
              </button>
            ) : (
              <button onClick={() => addToCart(product.shopId, product._id)}>
                Add to cart
              </button>
            )}
          </ShopProductCard>
        ))}
      </ShopProductsList>
    </ShopProductsContainer>
  );
};

export default ShopProducts;
