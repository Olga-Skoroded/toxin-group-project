import styled, { css } from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';
import { container, titles } from 'shared/styles/mixins';

const MainContent = styled.section`
  ${container};
  padding: 2rem 10rem;

  @media ${breakpointDown('sm')} {
    padding: 2rem 4rem;
  }

  @media ${breakpointDown('xs')} {
    padding: 1rem;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;

const Title = styled.h1`
  ${titles.h1};
`;

const Select = styled.select`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      border-radius: 0.2857rem;
      border: 0.0714rem solid ${colors.basicLight};
      padding: 0.5rem;
      font-family: inherit;
      cursor: pointer;

      &:hover,
      &:focus {
        border: 0.0714rem solid ${colors.basic};
        outline: none;

        ::placeholder {
          color: ${colors.basicDark};
        }
      }
    `;
  }}
`;

const Option = styled.option``;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style: none;
`;

const Item = styled.li`
  margin: 1rem;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  margin: 20rem 0 15rem;
  ${titles.h1};
`;

export { MainContent, Header, Title, Select, Option, List, Item, Loading };
