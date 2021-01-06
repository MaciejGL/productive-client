import styled from 'styled-components';

export const Nav = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;
export const H2 = styled.h2`
  margin-top: 2rem;
  text-align: center;
`;
export const Hamburger = styled.div`
  padding: 1rem;
  background-color: transparent;
  color: inherit;
  cursor: pointer;
  z-index: 9999999999;
  & > svg {
    font-size: 2.5em;
  }
`;
