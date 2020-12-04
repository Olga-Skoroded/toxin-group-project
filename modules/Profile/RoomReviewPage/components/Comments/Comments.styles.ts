import styled from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';
import { titles } from 'shared/styles/mixins';

const ReviewsWrapper = styled.form`
  grid-column: 1 / 3;

  @media ${breakpointDown('sm')} {
    grid-column: 1;
  }
`;

const Title = styled.h2`
  ${titles.h2};
  font-size: 1.357rem;
  margin-bottom: 1.4285rem;
`;

const ReviewsContainer = styled.div`
  margin-bottom: 1.4286rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export { ReviewsWrapper, Title, ReviewsContainer, ButtonWrapper };
