import styled from 'styled-components';

import { titles } from 'shared/styles/mixins';

const RatingWrapper = styled.form``;

const StarRatingWrapper = styled.div`
  margin-bottom: 1.4286rem;
`;

const Title = styled.h2`
  ${titles.h2};
  font-size: 1.357rem;
  margin-bottom: 1.4285rem;
`;

export { RatingWrapper, StarRatingWrapper, Title };
