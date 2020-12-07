import styled, { css } from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';
import { titles } from 'shared/styles/mixins';
import { Button } from 'shared/view/elements';

type TitleProps = {
  elementType: 'checkbox' | 'dropdown';
};

type FiltersProps = {
  isOpenMobileFilters: boolean;
};

const RoomFilter = styled.div`
  max-width: 19rem;
`;

const MobileButton = styled(Button)`
  display: none;
  width: 100%;

  @media ${breakpointDown('md')} {
    display: block;
  }
`;

const Filters = styled.form<FiltersProps>`
  ${({ isOpenMobileFilters }) => {
    return css`
      @media ${breakpointDown('md')} {
        display: ${isOpenMobileFilters ? 'block;' : 'none;'};
        margin-top: 1rem;
      }
    `;
  }}
`;

const TimePickerWrapper = styled.div`
  margin-bottom: 1.3rem;
`;

const DropdownWrapper = styled.div`
  margin-bottom: 2rem;
`;

const SliderWrapper = styled.div`
  margin-bottom: 2rem;
`;

const SliderDescription = styled.p`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      font-size: 0.8571rem;
      color: ${colors.basic};
    `;
  }}
`;

const Title = styled.h3<TitleProps>`
  ${(props) => {
    const { elementType } = props;
    return css`
      ${titles.h3}
      margin-bottom: ${elementType === 'dropdown' ? '0.3' : '1'}rem;
    `;
  }}
`;

const CheckboxWrapper = styled.div`
  margin-bottom: 2.2rem;
`;

const SubmitButton = styled(Button)`
  width: 100%;
`;

export {
  RoomFilter,
  MobileButton,
  Filters,
  Title,
  TimePickerWrapper,
  DropdownWrapper,
  SliderWrapper,
  SliderDescription,
  CheckboxWrapper,
  SubmitButton,
};
