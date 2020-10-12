import styled from 'styled-components';

import { titles } from 'shared/styles/mixins';

const Reviews = styled.article`
  position: relative;
`;

const Title = styled.h2`
  ${titles.h2}
  margin-bottom: 1.2857rem;

  @media (max-width: 576px) {
    margin-bottom: 0.714rem;
  }
`;

const Counter = styled.p`
  position: absolute;
  top: 0.42857rem;
  right: 0.0714rem;

  @media (max-width: 576px) {
    position: static;
    margin-bottom: 1.2857rem;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 1.5714rem;
  }
`;

export { Reviews, Title, Counter, List, Item };
