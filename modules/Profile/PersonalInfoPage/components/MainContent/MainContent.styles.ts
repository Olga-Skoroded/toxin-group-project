import styled from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';
import { container, titles } from 'shared/styles/mixins';

const MainContent = styled.main`
  ${container};
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 60rem;
  padding: 5rem;

  @media ${breakpointDown('xs')} {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h1`
  ${titles.h1};
  margin-bottom: 3rem;
`;

export { MainContent, Title };
