import styled, { css } from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  ${(props) => {
    const { colors, typography } = props.theme;
    return css`
      position: relative;
      margin-bottom: 0.7143rem;
      padding-left: 1.4286rem;
      line-height: ${typography.lineHeight};
      color: ${colors.basicDark};

      &:last-child {
        margin-bottom: 0;
      }

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.5rem;
        width: 0.7143rem;
        height: 0.7143rem;
        background-color: ${colors.basicLight};
        border-radius: 50%;
      }
    `;
  }}
`;

export { List, Item };
