import styled, { css } from 'styled-components';

import { materialIcons } from 'shared/styles/mixins';

type Icon = {
  icon: string;
};

const Benefits = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      display: flex;

      &:not(:last-child) {
        border-bottom: 0.01rem solid ${colors.basicPale};
        padding: 1.4rem 0;
      }

      &:last-child {
        padding: 1.4rem 0 0.214rem;
      }
    `;
  }}
`;

const List = styled.dl`
  display: flex;
  flex-direction: column;
  padding-left: 0.8rem;
`;

const Icon = styled.span<Icon>`
  ${(props) => {
    const { gradients } = props.theme;
    const { icon } = props;

    return css`
      font-size: 3.45rem;
      background: ${gradients.primary};
      ${materialIcons};

      &:before {
        content: '${icon}';
      }
    `;
  }}
`;

const Term = styled.dt`
  font-size: 1rem;
  font-weight: bold;
  line-height: 2rem;
  word-break: break-word;
`;

export { Benefits, Item, List, Icon, Term };
