import styled, { css } from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';
import { titles } from 'shared/styles/mixins';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakpointDown('md')} {
    width: 100%;
  }
`;

const Title = styled.h3`
  ${titles.h3()}
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  ${(props) => {
    const { colors, typography } = props.theme;
    return css`
      max-width: 18.5714rem;
      margin-bottom: 1.4286rem;
      color: ${colors.basicDark};
      line-height: ${typography.lineHeight};
    `;
  }}
`;

const FieldContainer = styled.div`
  max-width: 18.5714rem;
`;

export { Container, Title, Description, FieldContainer };
