import React from "react";
import { PageContainer } from "../../global-styles";
import {
  HistoryContainer,
  HistoryTopBox,
  HistoryTopForm,
} from "./styles/history";
import HistoryOrderList from "../../components/history-order-list";

import configData from "./../../config/configuration.json";

const History = () => {
  const [orderHistory, setOrderHistory] = React.useState([]);
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  React.useEffect(() => {
    if (email.length < 1 || phone < 1) {
      return;
    }
    const params = new URLSearchParams();
    params.append("email", email);
    params.append("phone", phone.substring(1));

    fetch(`${configData.SERVER_URL}/customer?${params.toString()}`)
      .then((response) => response.json())
      .then((data) => {
        setOrderHistory(data.orders);
      })
      .catch(() => {
        setOrderHistory([]);
      });
  }, [email, phone]);

  return (
    <PageContainer>
      <HistoryContainer>
        <HistoryTopBox>
          <HistoryTopForm>
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
          </HistoryTopForm>
        </HistoryTopBox>

        <HistoryOrderList orderHistory={orderHistory} />
      </HistoryContainer>
    </PageContainer>
  );
};

export default History;
