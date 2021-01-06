import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;

  /* font-size: 2rem; */
  font-weight: 300;

  & > svg {
    margin-right: 1rem;
    font-size: 2rem;
    @media (min-width: 960px) {
      margin: 0;
    }
  }

  & p {
    font-weight: 100;
  }
  &:hover {
    color: orange;
  }
  @media (min-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LinksContainer = styled.div`
  padding: 20px;
  // Do zmiany
  .activeLink {
    color: darkorange;
  }
  @media (min-width: 960px) {
    display: flex;
  }
`;
