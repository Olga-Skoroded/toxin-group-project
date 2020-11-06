import styled, { css } from 'styled-components';

const PersonalInfo = styled.ul`
  width: 100%;
  list-style: none;
`;

const Item = styled.li`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      padding: 2rem 0;
      border-bottom: 0.0714rem solid ${colors.basicPale};
    `;
  }}
`;
export { PersonalInfo, Item };
