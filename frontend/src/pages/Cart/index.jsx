import React from "react";
import { PageContainer } from "../../global-styles";
import { CartContainer } from "./styles/cart";
import CartSidebar from "../../components/cart-sidebar";

import configData from "./../../config/configuration.json";
import CartProducts from "../../components/cart-products";

import { useNavigate } from "react-router-dom";
import { CartLocalStorageContext } from "../../App";

const Cart = () => {
  const navigate = useNavigate();

  const { cartShop, setCartShop, cart, setCart } = React.useContext(
    CartLocalStorageContext
  );

  const [order, setOrder] = React.useState({});
  const [price, setPrice] = React.useState(+0);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (cartShop == null) {
      navigate("/");
      return;
    }
  }, [cart, cartShop]);

  React.useEffect(() => {
    if (cartShop == null) {
      navigate("/");
      return;
    }

    try {
      fetch(`${configData.SERVER_URL}/shop/${cartShop}`)
        .then((response) => response.json())
        .then((data) => {
          // Get products from shop by id from cart
          const products = data.products.filter((item) =>
            cart.includes(item._id)
          );

          // Modify products objects and add amount
          const productsWithAmount = products.map((prod) => {
            return { ...prod, amount: +1 };
          });

          setOrder({
            shop: data,
            products: productsWithAmount,
          });

          setPrice(
            productsWithAmount.reduce((accum, prod) => {
              return accum + prod.price * prod.amount;
            }, 0)
          );

          setLoading(false);
        })
        .catch(() => {
          throw new Error(
            `Something with server... (${configData.SERVER_URL}/shop/${cartShop})`
          );
        });
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

  // Handler for fetch order to server
  const handleSubmit = ({ name, email, phone, address }) => {
    const orderedProducts = order.products.map((product) => {
      return { productId: product._id, amount: product.amount };
    });

    console.log(orderedProducts);

    fetch(`${configData.SERVER_URL}/order`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        phone,
        deliveryAddress: address,
        shopId: cartShop,
        orderedProducts,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCart([]);
        setCartShop(null);
        navigate(`/${configData.GH_PAGES_PREFIX}/successful`);
      })
      .catch();
  };

  // Handler for removing items from order and local storage cart
  const removeProduct = (id) => {
    const newCart = cart.filter((item) => {
      console.log(item);
      return item !== id;
    });

    setCart(newCart);

    const newProducts = order.products.filter((item) => {
      // console.log(item);
      return item._id !== id;
    });

    console.log(newProducts);

    setOrder({
      shop: order.shop,
      products: newProducts,
    });

    setPrice(
      newProducts.reduce((accum, prod) => {
        return accum + prod.price * prod.amount;
      }, 0)
    );

    console.log(order.products);

    if (newCart.length === 0) {
      setCartShop(null);
    }
  };

  // Handler for changing amount of products in order
  const changeAmount = (id, num) => {
    const updatedProducts = order.products.map((item) => {
      if (item._id === id) {
        item.amount += num;
      }

      return item;
    });

    setOrder({
      shop: order.shop,
      products: updatedProducts,
    });

    setPrice(
      order.products.reduce((accum, prod) => {
        return accum + prod.price * prod.amount;
      }, 0)
    );
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <PageContainer>
      <CartContainer>
        <CartSidebar
          handleSubmit={handleSubmit}
          shop={order.shop}
          price={price}
        />

        <CartProducts
          products={order.products}
          remove={removeProduct}
          changeAmount={changeAmount}
        />
      </CartContainer>
    </PageContainer>
  );
};

export default Cart;
