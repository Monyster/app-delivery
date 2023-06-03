import styled from "styled-components";

export const ShopProductsContainer = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1 1 auto;

  max-height: 80vh;

  gap: 10px;

  padding: 20px;
  font-size: 16px;

  background-color: var(--header);

  border-radius: 10px;

  overflow-y: auto;
`;

export const ShopProductsHeader = styled.h3`
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`;

export const ShopProductsList = styled.div`
  flex: 1 1 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 20px;
`;

export const ShopProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;

  max-width: 100%;
  img {
    width: 100%;
    max-width: 250px;
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
