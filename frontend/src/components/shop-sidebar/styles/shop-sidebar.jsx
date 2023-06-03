import styled from "styled-components";

export const ShopSidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 30px;

  max-width: 200px;
  max-height: 80vh;

  padding: 20px;
  font-size: 20px;

  background-color: var(--header);

  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ShopButton = styled.button`
  padding: 12px 25px;
  text-align: center;

  font-size: 16px;
  font-weight: 600;

  min-width: 100%;

  color: var(--primary-text);
  background-color: var(--header);

  border-radius: 10px;
`;
