import styled from "styled-components";

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 18px;
  font-weight: 500;

  gap: 20px;

  flex: 1 1 auto;
`;

export const HistoryTopBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  padding: 20px 0;

  font-size: 18px;
  font-weight: 500;

  background-color: var(--header);
  border-radius: 10px;
`;

export const HistoryTopForm = styled.form`
  display: flex;
  flex-direction: column;

  font-size: 18px;
  font-weight: 500;

  gap: 15px;

  flex: 1 1 auto;

  max-width: 300px;

  input {
    padding: 10px 15px;
  }
`;

export const HistorySubmitButton = styled.button`
  padding: 10px 15px;
  text-align: center;

  font-size: 16px;
  font-weight: 500;

  color: var(--primary-text);
  background-color: var(--header);

  border-radius: 10px;
`;
