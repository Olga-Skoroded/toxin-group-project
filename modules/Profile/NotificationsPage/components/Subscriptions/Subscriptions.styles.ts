import styled from 'styled-components';

import { titles } from 'shared/styles/mixins';

const Subscriptions = styled.section``;

const Title = styled.h2`
  ${titles.h2};
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const Item = styled.li`
  padding: 2rem 0;
`;

export { Subscriptions, Title, List, Item };
