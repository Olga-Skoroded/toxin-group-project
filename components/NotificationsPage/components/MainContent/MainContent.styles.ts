import styled from 'styled-components';

import { container, titles } from 'shared/styles/mixins';

const MainContent = styled.main`
  ${container};
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 60rem;
  padding: 5rem;
`;

const Title = styled.h1`
  ${titles.h1};
  margin-bottom: 2rem;
  text-align: center;
`;

export { MainContent, Title };
