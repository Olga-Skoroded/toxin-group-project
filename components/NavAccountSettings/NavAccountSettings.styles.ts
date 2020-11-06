import styled, { css } from 'styled-components';

const NavAccountSettings = styled.nav`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      display: flex;
      align-items: center;
      align-self: flex-start;
      margin-bottom: 1rem;
      color: ${colors.basic};
    `;
  }}
`;

const Link = styled.a`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      color: inherit;
      text-decoration: none;

      &:hover {
        color: ${colors.basicDarkest};
      }
    `;
  }}
`;

export { NavAccountSettings, Link };
