import styled, { css } from 'styled-components';

import { materialIcons } from 'shared/styles/mixins';

import { StarProps, StarRatingProps } from './StarRating.types';

const StarRating = styled.div`
  display: flex;
`;

const Star = styled.button<StarProps & Partial<StarRatingProps>>`
  ${(props) => {
    const { gradients } = props.theme;
    const { iconName, disabled } = props;

    return css`
      ${materialIcons}
      background-image: ${gradients.primary};
      font-size: 1.7rem;
      border: 0;
      background-color: transparent;
      transition: 0.3s;

      &:focus {
        ${disabled &&
        css`
          outline: 0;
        `}
      }

      &:hover {
        ${!disabled &&
        css`
          opacity: 0.6;
        `}
      }

      &:before {
        content: '${iconName}';
      }
    `;
  }}
`;

export { StarRating, Star };
