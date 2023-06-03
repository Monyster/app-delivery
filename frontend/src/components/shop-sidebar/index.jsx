import React from "react";
import { ShopButton, ShopSidebarContainer } from "./styles/shop-sidebar";

const ShopSidebar = ({ setCurrentShop, shops = [], chosenShopId }) => {
  return (
    <ShopSidebarContainer>
      {shops.map((shop) => (
        <ShopButton
          key={shop._id}
          disabled={!(chosenShopId == null || chosenShopId === shop._id)}
          onClick={() => {
            setCurrentShop(shop);
          }}
        >
          {shop.name}
        </ShopButton>
      ))}
    </ShopSidebarContainer>
  );
};

export default ShopSidebar;
