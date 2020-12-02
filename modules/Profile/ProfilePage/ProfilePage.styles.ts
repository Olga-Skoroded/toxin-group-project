import styled from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';
import { container, titles } from 'shared/styles/mixins';

const Container = styled.div`
  ${container};
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 5rem;

  @media ${breakpointDown('xs')} {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h1`
  ${titles.h1};
  margin-bottom: 2rem;
  text-align: center;
`;

const Cards = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 22rem);
  justify-content: center;
  gap: 2rem;
  list-style: none;
`;

const Item = styled.li``;

export { Container, Title, Cards, Item };
