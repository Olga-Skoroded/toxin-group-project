import styled, { css } from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';
import { titles } from 'shared/styles/mixins';

const Title = styled.h3`
  ${titles.h3()}
  width: max-content;
  margin-bottom: 1.5rem;
`;

const Link = styled.a`
  ${(props) => {
    const { typography, colors } = props.theme;
    return css`
      display: inline-block;
      font-family: ${typography.fontName};
      line-height: 1.2143rem;
      color: ${colors.basic};
      text-decoration: none;
      text-transform: lowercase;

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
    margin-right: 1.4286rem;
  }

  @media ${breakpointDown('md')} {
    &:not(:last-child) {
      margin-right: 0;
    }
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 1.4286rem;
  }
`;

export { Title, Link, Container, List, Item };
