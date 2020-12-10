import styled from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';

const Container = styled.div`
  background: url('/img/auth-register.jpg') bottom / cover no-repeat;
  min-height: 50.2rem;
  padding: 12.25rem 8rem;

  & > section {
    margin: 0 auto;
  }

  @media ${breakpointDown('lg')} {
    min-height: 40.2rem;
    padding: 10rem 6rem;
  }

  @media ${breakpointDown('md')} {
    min-height: 30.2rem;
  }

  @media ${breakpointDown('xs')} {
    min-height: 20.2rem;
    padding: 0.7rem;
  }
`;

export { Container };
