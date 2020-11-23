import styled, { css } from 'styled-components';

import { materialIcons } from 'shared/styles/mixins';

const Container = styled.div``;

const NavBarButton = styled.button`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      background: ${colors.primary};
      ${materialIcons};
      cursor: pointer;
      border: none;
      outline: none;
      font-size: 1.71rem;

      &:focus,
      &:hover {
        transform: scale(1.2);
      }

      &:first-child {
        float: left;
      }

      &:last-child {
        float: right;
      }
    `;
  }}
`;

export { Container, NavBarButton };
