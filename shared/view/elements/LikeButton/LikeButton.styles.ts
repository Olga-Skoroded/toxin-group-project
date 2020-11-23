import styled, { css } from 'styled-components';

import { visuallyHidden } from 'shared/styles/mixins';

type LikeSpan = {
  isActive: boolean;
};

const LikeInput = styled.input`
  ${visuallyHidden};
`;

const LikeLabel = styled.label<LikeSpan>`
  ${(props) => {
    const { colors, gradients } = props.theme;
    const { isActive } = props;

    return css`
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-around;
      min-width: 2.7rem;
      width: fit-content;
      height: 1.3rem;
      border-radius: 1rem;
      background: ${colors.defaultBackground};
      position: relative;
      color: ${isActive ? colors.primary : colors.basicLight};
      padding: 0 0.2rem;

      &:before {
        content: '';
        position: absolute;
        top: -0.06rem;
        bottom: -0.06rem;
        left: -0.06rem;
        right: -0.06rem;
        background: ${isActive ? gradients.primary : colors.basicLight};
        border-radius: 2rem;
        z-index: -1;
      }

      & svg {
        width: 0.7rem;
        height: 0.7rem;
        fill: ${isActive ? colors.primary : colors.defaultBackground};
        stroke: ${isActive ? 'none' : colors.basicLight};
        stroke-width: 0.14rem;
      }
    `;
  }}
`;

const LikeSpan = styled.span`
  ${(props) => {
    const { typography } = props.theme;

    return css`
      font-family: ${typography.fontName};
      font-size: 0.7rem;
      user-select: none;
    `;
  }}
`;

const LikeOutline = styled.span`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      position: absolute;
      top: -0.06rem;
      left: -0.06rem;
      right: -0.06rem;
      bottom: -0.06rem;
      border-radius: 1rem;

      ${LikeInput}:checked:hover ~ &,
      ${LikeInput}:checked:focus ~ & {
        box-shadow: 0 0 0.7142rem ${colors.primary};
      }

      ${LikeInput}:not(:checked):hover ~ &,
      ${LikeInput}:not(:checked):focus ~ & {
        box-shadow: 0 0 0.7142rem ${colors.basic};
      }
    `;
  }}
`;

export { LikeInput, LikeLabel, LikeSpan, LikeOutline };
