import styled from "styled-components";

export const HistoryOrderListContainer = styled.div`
  flex: 1 1 auto;

  max-height: 80vh;

  padding: 20px;
  font-size: 16px;

  background-color: var(--header);
  border-radius: 10px;
  overflow-y: auto;
`;

export const OrderList = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1 1 auto;

  gap: 20px;

  section {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;

    padding: 15px 20px;

    background-color: #202020;
    border-radius: 10px;
  }
`;
