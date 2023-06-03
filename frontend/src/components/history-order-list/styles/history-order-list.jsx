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
    row-gap: 10px;

    padding: 15px 20px;

    background-color: #202020;
    border-radius: 10px;

    section {
      display: flex;
      flex-direction: column;
      div {
        display: flex;
        gap: 30px;
      }
    }

    section > *:not(:last-child) {
      padding: 0 0 10px 0;
      border-bottom: 1px solid #fff;
    }
  }
`;
