import styled from "styled-components";

export const CartProductsContainer = styled.div`
  flex: 1 1 auto;

  max-height: 80vh;

  padding: 20px;
  font-size: 16px;

  background-color: var(--header);
  border-radius: 10px;
  overflow-y: auto;
`;

export const CartProductsList = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1 1 auto;

  gap: 20px;
`;
