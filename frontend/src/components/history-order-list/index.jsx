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
          </section>
        ))}
      </OrderList>
    </HistoryOrderListContainer>
  );
};

export default HistoryOrderList;
