import styled, { css } from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';
import { titles } from 'shared/styles/mixins';

const Container = styled.div`
  display: grid;
  gap: 0 4.2857rem;
  grid-template-columns: 19rem 1fr;
  padding: 2.1429rem 10rem;

  @media ${breakpointDown('lg')} {
    padding-left: 4.2857rem;
    padding-right: 4.2857rem;
  }

  @media ${breakpointDown('md')} {
    display: flex;
    padding-left: 2.2857rem;
    padding-right: 2.2857rem;
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${breakpointDown('md')} {
    flex-direction: column;
  }
`;
const Sort = styled.div`
  text-align: right;
  margin-left: 1.4286rem;

  @media ${breakpointDown('md')} {
    text-align: center;
    margin-left: 0;
    margin-bottom: 1.4286rem;
  }
`;

const Select = styled.select`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      margin-left: 1.4286rem;
      background-color: transparent;
      font: inherit;
      border-radius: 0.2857rem;
      border: 0.0714rem solid ${colors.basicLight};

      &:hover,
      &:focus {
        border: 0.0714rem solid ${colors.basic};
        outline: none;

        &::placeholder {
          color: ${colors.basicDark};
        }
      }
    `;
  }}
`;

const FilterContainer = styled.div`
  @media ${breakpointDown('xl')} {
    margin: 0 auto 2.1429rem;
  }
`;

const RoomsContainer = styled.section``;

const RoomsTitle = styled.h1`
  ${titles.h1}
  margin-bottom: 1.4286rem;

  @media ${breakpointDown('md')} {
    text-align: center;
  }
`;

const PreloaderWrapper = styled.div`
  margin-top: 3.5715rem;
`;

export {
  Container,
  RoomsContainer,
  TitleContainer,
  RoomsTitle,
  PreloaderWrapper,
  FilterContainer,
  Sort,
  Select,
};
