import React from "react";
import { PageContainer } from "../../global-styles";
import { HomeContainer } from "./styles/home";
import ShopSidebar from "../../components/shop-sidebar";
import ShopProducts from "../../components/shop-products";

import configData from "./../../config/configuration.json";
import { CartLocalStorageContext } from "../../App";

const Home = () => {
  const { cartShop, setCartShop, cart, setCart } = React.useContext(
    CartLocalStorageContext
  );

  const [loading, setLoading] = React.useState(true);
  const [currentShop, setCurrentShop] = React.useState(null);
  const [shops, setShops] = React.useState([]);

  React.useEffect(() => {
    try {
      fetch(`${configData.SERVER_URL}/shop`)
        .then((response) => response.json())
        .then((data) => {
          setShops(data);
          setCurrentShop(data[0]);
          setLoading(false);
        })
        .catch(() => {
          throw new Error(
            `Something with server... (${configData.SERVER_URL}/shop)`
          );
        });
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

  // Handle adding a product to the cart
  const addToCart = (shopId, productId) => {
    if (cartShop != null && cartShop !== shopId) {
      return;
    }

    setCartShop(shopId);
    setCart([...cart, productId]);
  };

  // Handle remove a product from the cart
  const removeFromCart = (shopId, productId) => {
    if (cartShop != null && cartShop !== shopId) {
      return;
    }

    const newArray = [...cart];

    newArray.splice(cart.indexOf(productId), 1);
    console.log(newArray);
    setCart(newArray);

    if (newArray.length === 0) {
      setCartShop(null);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <PageContainer>
      <HomeContainer>
        <ShopSidebar
          setCurrentShop={setCurrentShop}
          shops={shops}
          chosenShopId={cartShop}
        />

        <ShopProducts
          shop={currentShop}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </HomeContainer>
    </PageContainer>
  );
};

export default Home;
