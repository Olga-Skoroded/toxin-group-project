import { Slider as MuiSlider } from '@material-ui/core';
import styled, { css } from 'styled-components';

import { titles } from 'shared/styles/mixins';

type DescriptionProps = {
  title: string;
};

const Description = styled.div<DescriptionProps>`
  ${(props) => {
    const { title } = props;
    return css`
      display: flex;
      align-items: center;
      justify-content: ${title ? 'space-between' : 'flex-end'};
      margin-bottom: 0.7143rem;
    `;
  }}
`;

const Title = styled.h3`
  ${titles.h3}
`;

const Value = styled.span`
  font-size: 0.8571rem;
`;

const Slider = styled(MuiSlider)`
  ${(props) => {
    const { colors, gradients } = props.theme;
    return css`
      & .MuiSlider-rail {
        height: 0.4286rem;
        background: white;
        border: 0.0714rem solid ${colors.basicLight};
        border-radius: 0.2143rem;
      }

      & .MuiSlider-thumb {
        width: 1.1429rem;
        height: 1.1429rem;
        background: ${colors.secondary} ${gradients.secondary};
        border: 0.1429rem solid white;
      }

      & .MuiSlider-thumb.Mui-focusVisible,
      & .MuiSlider-active,
      & .MuiSlider-thumb:hover,
      & .MuiSlider-thumb:focus {
        box-shadow: 0 0 1.0714rem ${colors.secondary};
      }

      & .MuiSlider-track {
        height: 0.4286rem;
        border-radius: 0.2143rem;
        background: ${colors.secondary} ${gradients.secondary};
      }
    `;
  }}
`;

export { Slider, Description, Title, Value };
