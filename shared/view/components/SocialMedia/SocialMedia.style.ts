import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  list-style: none;
`;

const ListItem = styled.li`
  width: 1.7143rem;
  height: 1.7143rem;

  &:not(:last-child) {
    margin-right: 1.4286rem;
  }
`;

export { List, ListItem };
