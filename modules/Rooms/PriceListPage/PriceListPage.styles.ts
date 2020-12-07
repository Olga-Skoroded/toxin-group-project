import styled from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';

const Container = styled.div`
  padding: 2.1429rem 10rem;

  @media ${breakpointDown('lg')} {
    padding-left: 4.2857rem;
    padding-right: 4.2857rem;
  }

  @media ${breakpointDown('md')} {
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
    flex-direction: column;
  }
`;

export { Container };
