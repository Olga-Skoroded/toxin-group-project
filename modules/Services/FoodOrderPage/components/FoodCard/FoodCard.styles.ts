import styled, { css } from 'styled-components';

import { titles } from 'shared/styles/mixins';

const FoodCard = styled.section`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      display: flex;
      flex-direction: column;
      max-width: 30rem;
      height: 100%;
      padding: 1.5rem;
      border: 0.0714rem solid rgba(0, 0, 0, 0.12);
      box-shadow: 0 0 1.7857rem rgba(0, 0, 0, 0.2);
      border-radius: 0.2857rem;
      background: ${colors.defaultBackground};
    `;
  }}
`;

const Header = styled.header`
  display: flex;
  margin-bottom: 0.2rem;
`;

const Title = styled.h2`
  margin-right: 0.5rem;
  ${titles.h2};
`;

const Price = styled.span`
  margin-left: auto;
  font-weight: bold;
`;

const Grams = styled.p`
  margin-bottom: 1rem;
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 100%;
  margin-top: auto;
`;

export { FoodCard, Header, Title, Grams, Price, Description, Image };
