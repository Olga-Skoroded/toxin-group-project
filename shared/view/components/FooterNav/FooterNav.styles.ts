import styled from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-evenly;

  @media ${breakpointDown('md')} {
    flex-direction: column;
  }
`;

export { Container };
