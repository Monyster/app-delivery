import styled from "styled-components";

export const CartForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input {
    padding: 10px 15px;
  }
`;

export const CartSubmitButton = styled.button`
  padding: 12px 25px;
  text-align: center;

  font-size: 16px;
  font-weight: 600;

  min-width: 100%;

  color: var(--primary-text);
  background-color: var(--header);

  border-radius: 10px;
`;
