import styled, { css } from 'styled-components';

import { titles } from 'shared/styles/mixins';
import { Button } from 'shared/view/elements';

type TitleProps = {
  elementType: 'checkbox' | 'dropdown';
};

const RoomFilter = styled.div`
  max-width: 19rem;
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
  Title,
  TimePickerWrapper,
  DropdownWrapper,
  SliderWrapper,
  SliderDescription,
  CheckboxWrapper,
  SubmitButton,
};
