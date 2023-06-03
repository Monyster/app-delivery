import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;

  flex: 1 1 auto;

  gap: 20px;

  min-height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
