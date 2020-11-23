import styled, { css } from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';
import { container, visuallyHidden } from 'shared/styles/mixins';

const Container = styled.div`
  ${container}
  padding-left: 10rem;
  padding-right: 10rem;

  @media ${breakpointDown('xl')} {
    padding-left: 4.2857rem;
    padding-right: 4.2857rem;
  }
`;

const MainContainer = styled(Container)`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      display: grid;
      grid-template-columns: minmax(0, 18.5714rem) 1fr minmax(0, 18.5714rem);
      grid-gap: 2.8571rem;
      border-bottom: 0.0714rem solid ${colors.basicPale};
      padding-top: 7.1429rem;
      padding-bottom: 7.1429rem;

      @media ${breakpointDown('md')} {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding-bottom: 2.1428rem;
        padding-top: 8.5714rem;
        border-bottom: 0;
      }

      @media ${breakpointDown('xs')} {
        padding-top: 3.5714rem;
      }
    `;
  }}
`;

const Title = styled.h2`
  ${visuallyHidden}
`;

const Wrapper = styled.footer``;

const BottomContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding-top: 1.8571rem;
  padding-bottom: 1.8571rem;

  @media ${breakpointDown('md')} {
    padding-top: 0;
    flex-direction: column;
    padding-bottom: 8.5714rem;
    align-items: center;
    text-align: center;
  }

  @media ${breakpointDown('xs')} {
    padding-bottom: 3.5714rem;
  }
`;

export { Container, MainContainer, BottomContainer, Title, Wrapper };
