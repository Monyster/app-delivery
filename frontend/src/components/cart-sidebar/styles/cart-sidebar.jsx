import styled from "styled-components";

export const CartSidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 30px;

  max-height: 80vh;

  padding: 20px;
  font-size: 20px;

  background-color: var(--header);

  border-radius: 10px;
`;

export const CartSidebarDetails = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;

  h2 {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
  }

  div {
    font-size: 18px;
    font-weight: 500;
  }
`;
