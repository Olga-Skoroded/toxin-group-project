import styled, { css } from 'styled-components';

import { titles } from 'shared/styles/mixins';
import { ArrowButton } from 'shared/view/elements';

const FoodOrderForm = styled.section`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      width: 100%;
      max-width: 27.1429rem;
      padding: 2.75rem 2rem 2rem 2.05rem;
      background: ${colors.defaultBackground};
      box-shadow: 0 0 1.7857rem rgba(0, 0, 0, 0.2);
      border: 0.0714rem solid rgba(0, 0, 0, 0.12);
      border-radius: 0.2857rem;
    `;
  }}
`;

const Title = styled.h1`
  ${titles.h2};
`;

const RoomSelect = styled.div`
  margin: 1.5rem 0;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 0;
  ${titles.h1};
  text-align: center;
`;

const FoodOrderButton = styled(ArrowButton)``;

export { FoodOrderForm, Title, RoomSelect, FoodOrderButton, Loading };
