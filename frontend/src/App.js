import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/header";
import { AppContainer, MainContainer } from "./global-styles";
import useLocalStorage from "./hooks/useLocalStorage";
import Successful from "./pages/Successful";
import History from "./pages/History";

import configData from "./config/configuration.json";

function App() {
  return (
    <CartLocalStorageProvider>
      <AppContainer>
        <Header />
        <MainContainer>
          <Routes>
            <Route
              path={`/`}
              element={<Home />}
            />
            <Route
              path={`/history`}
              element={<History />}
            />
            <Route
              path={`/cart`}
              element={<Cart />}
            />
            <Route
              path={`/successful`}
              element={<Successful />}
            />
          </Routes>
        </MainContainer>
      </AppContainer>
    </CartLocalStorageProvider>
  );
}

export const CartLocalStorageContext = React.createContext({});
const CartLocalStorageProvider = ({ children }) => {
  const [cartShop, setCartShop] = useLocalStorage("cartShop", null);
  const [cart, setCart] = useLocalStorage("cart", []);

  return (
    <CartLocalStorageContext.Provider
      value={{ cartShop, cart, setCartShop, setCart }}
    >
      {children}
    </CartLocalStorageContext.Provider>
  );
};

export default App;
