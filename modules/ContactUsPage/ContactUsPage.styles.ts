import styled from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';
import { container } from 'shared/styles/mixins';

const Container = styled.div`
  ${container}
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 59.286rem;
  background: url('/img/contact-us-page-banner.jpg') bottom / cover no-repeat;

  @media ${breakpointDown('lg')} {
    min-height: 48rem;
  }

  @media ${breakpointDown('md')} {
    min-height: 40rem;
  }

  @media ${breakpointDown('sm')} {
    min-height: 35rem;
  }

  @media ${breakpointDown('xs')} {
    min-height: 30rem;
  }
`;

export { Container };
