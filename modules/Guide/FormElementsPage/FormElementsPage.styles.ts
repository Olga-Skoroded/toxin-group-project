import styled from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';
import { container, titles } from 'shared/styles/mixins';

const FormElementsPage = styled.div`
  ${container}
`;

const Logo = styled.div`
  padding-left: 1.1428rem;
  padding-top: 2.1428rem;
`;

const Content = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 22.8571rem);
  grid-template-rows: repeat(3, auto);
  gap: 7.8571rem;
  padding-top: 4.5rem;
  justify-content: center;
  grid-template-areas:
    '. . .'
    '. . .'
    'benefits comment comment';

  @media ${breakpointDown('xl')} {
    grid-template-columns: repeat(2, 22.8571rem);
    grid-template-rows: repeat(4, auto);
    grid-template-areas:
      '. .'
      '. .'
      '. .'
      'comment comment'
      'benefits benefits';
    padding-top: 1.5rem;
  }

  @media ${breakpointDown('md')} {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;

const Title = styled.h3`
  ${titles.h3}
  margin-bottom: 0.3571rem;
`;

const InputWrapper = styled.div`
  max-width: 22.8571rem;
`;

const TimePickerWrapper = styled.div`
  max-width: 22.8571rem;
  margin-top: 1.4286rem;
  margin-bottom: 2.5rem;
`;

const SubscriptionWrapper = styled.div`
  max-width: 19.0714rem;
`;

const DropdownWrapper = styled.div`
  max-width: 22.8571rem;
  margin-bottom: 1.4286rem;
`;

const CheckboxWrapper = styled.div`
  max-width: 15.8571rem;
  margin-bottom: 2.8571rem;
  margin-top: 1.1429rem;
`;

const RadioWrapper = styled.div`
  max-width: 17rem;
  display: flex;
  margin-bottom: 2.8571rem;
  margin-top: 1.1429rem;
  justify-content: space-around;
`;

const ToggleWrapper = styled.div`
  margin-bottom: 1.4286rem;
  margin-top: 1.1429rem;
`;

const LikeButtonWrapper = styled.div`
  margin: 1rem 0;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 2.1429rem;
`;

const TextButtonWrapper = styled.span`
  margin-right: 1.4286rem;
`;

const ExpandableCheckboxWrapper = styled.div`
  max-width: 18.1071rem;
  margin-bottom: 0.45rem;
`;

const StarRatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 18.5714rem;
`;

const ArrowButtonWrapper = styled.div`
  max-width: 22.8571rem;
  margin: 1rem 0;
`;

const SliderWrapper = styled.div`
  max-width: 19rem;
  margin-bottom: 1rem;
`;

const RichCheckboxWrapper = styled.div`
  max-width: 18.5rem;
  margin-bottom: 0.45rem;
`;

const BulletListWrapper = styled.div`
  max-width: 18.5714rem;
`;

const BenefitsWrapper = styled.div`
  grid-area: benefits;
  max-width: 19.9rem;
  margin: 1rem 0;
`;

const ReviewsWrapper = styled.div`
  grid-area: comment;
  max-width: 50.7rem;
  margin: 1rem 0;
`;

export {
  Logo,
  Content,
  Title,
  FormElementsPage,
  ButtonWrapper,
  TextButtonWrapper,
  ToggleWrapper,
  InputWrapper,
  LikeButtonWrapper,
  TimePickerWrapper,
  CheckboxWrapper,
  ExpandableCheckboxWrapper,
  BulletListWrapper,
  DropdownWrapper,
  ReviewsWrapper,
  BenefitsWrapper,
  StarRatingWrapper,
  RadioWrapper,
  ArrowButtonWrapper,
  SubscriptionWrapper,
  SliderWrapper,
  RichCheckboxWrapper,
};
