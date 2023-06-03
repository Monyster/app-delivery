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

export const CartProduct = styled.div`
  display: flex;

  justify-content: space-between;

  gap: 20px;

  flex: 1 1 auto;

  max-width: 100%;

  img {
    max-width: 20%;
    height: auto;
  }

  h4 {
    font-size: 18px;
    font-weight: 500;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: var(--secondary-text);
  }

  button {
    padding: 12px 25px;
    text-align: center;

    font-size: 16px;
    font-weight: 400;

    color: var(--primary-text);
    background-color: var(--header);

    border-radius: 10px;
  }
`;
