import styled from 'styled-components';

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > button {
    font-size: 1rem;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    user-select: none;
    &.dark_mode_on {
      color: orange;
    }
    &.dark_mode_off {
      color: darkorange;
    }
  }
`;
