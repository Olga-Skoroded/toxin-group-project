import styled, { css } from 'styled-components';

import { titles } from 'shared/styles/mixins';

const Card = styled.a`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 2rem;
      background: ${colors.defaultBackground};
      box-shadow: 0 0 1.7857rem rgba(0, 0, 0, 0.2);
      border: 0.0714rem solid rgba(0, 0, 0, 0.12);
      border-radius: 0.2857rem;
      text-decoration: none;
      outline: none;

      &:hover,
      &:focus {
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;
      }
    `;
  }}
`;

const Title = styled.h2`
  ${titles.h2};
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      color: ${colors.basic};
    `;
  }}
`;

export { Card, Title, Description };
