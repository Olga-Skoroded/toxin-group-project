import styled, { css } from 'styled-components';

const HeaderUserProfile = styled.div`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      padding: 0.5rem 1.4rem;
      border-left: 1px solid ${colors.basicLightest};
    `;
  }}
`;

const Link = styled.a`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      color: ${colors.basic};
      text-decoration: none;
      outline: none;
      margin-right: 1.5rem;
      position: relative;

      &:hover {
        color: ${colors.basicDarkest};
      }
    `;
  }}
`;

export { HeaderUserProfile, Link };
