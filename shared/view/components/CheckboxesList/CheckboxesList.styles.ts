import styled, { css } from 'styled-components';

type ListItemProps = {
  title: string;
};

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li<ListItemProps>`
  ${(props) => {
    const { title } = props;
    return css`
      margin-bottom: ${title ? '0.6rem' : '0.44rem'};
    `;
  }}
`;

export { List, ListItem };
