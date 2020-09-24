import styled, { css } from 'styled-components';

import { titles } from 'shared/styles/mixins';

const Title = styled.h3`
  ${titles.h3()}
  margin-bottom: 1.5rem;
`;

const Link = styled.a`
  ${(props) => {
    const { typography, colors } = props.theme;
    return css`
      display: inline-block;
      width: max-content;
      font-family: ${typography.fontName};
      line-height: 1.2143rem;
      color: ${colors.basic};
      text-decoration: none;
      text-transform: lowercase;

      &:not(:last-child) {
        margin-bottom: 1.4286rem;
      }

      &::first-letter {
        text-transform: uppercase;
      }

      &:hover,
      &:focus {
        color: ${colors.basicDarkest};
      }
    `;
  }}
`;

const Container = styled.div`
  &:not(:last-child) {
    margin-right: 2.8571rem;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export { Title, Link, Container, List };
