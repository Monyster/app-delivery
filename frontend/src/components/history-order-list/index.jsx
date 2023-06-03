import React from "react";
import {
  HistoryOrderListContainer,
  OrderList,
} from "./styles/history-order-list";

const HistoryOrderList = ({ orderHistory = [] }) => {
  React.useEffect(() => {
    console.log(orderHistory);
  }, [orderHistory]);

  return (
    <HistoryOrderListContainer>
      <OrderList>
        {orderHistory.map((order, i) => (
          <section key={order._id}>
            <div>{i}</div>
            <div>Date: {new Date(order.orderDate).toUTCString()}</div>
            <div>Address: {order.deliveryAddress}</div>
            <div>Shop: {order.shopId.name}</div>
            <section>
              {order.orderedProducts.map((product, i) => (
                <div>
                  <p>
                    Product {i}: {product.productId.name}
                  </p>
                  <p>Amount: {product.amount}</p>
                </div>
              ))}
            </section>
            <div>
              Total price:{" "}
              {order.orderedProducts.reduce((accum, product) => {
                return accum + product.amount * product.productId.price;
              }, 0)}
            </div>
          </section>
        ))}
      </OrderList>
    </HistoryOrderListContainer>
  );
};

export default HistoryOrderList;
