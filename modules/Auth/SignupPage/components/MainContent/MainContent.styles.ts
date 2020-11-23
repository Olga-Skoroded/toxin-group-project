import styled from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';

const Container = styled.div`
  background: url('/img/auth-register.jpg') bottom / cover no-repeat;
  min-height: 40rem;
  padding: 1.25rem;

  & > form {
    margin: 0 auto;
  }

  @media ${breakpointDown('xl')} {
    min-height: 30rem;
    padding: 1rem;
  }

  @media ${breakpointDown('lg')} {
    min-height: 20rem;
  }

  @media ${breakpointDown('sm')} {
    min-height: 10rem;
    padding: 0.7rem;
  }
`;

export { Container };
