import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 100%;
  padding: 20px 10px;
  font-size: 24px;
  background-color: var(--header);
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style-type: none;

    gap: 30px;

    li {
      a {
        text-decoration: none;
        color: var(--primary-text);
        background-color: var(--header);
        font-weight: bold;
        transition: color 0.2s ease-in-out;

        &.link-active {
          text-decoration: underline;
        }

        &:hover {
          color: var(--hover);
        }
      }
    }

    li:last-child {
      flex: 1 1 auto;
      text-align: end;
    }
  }
`;
