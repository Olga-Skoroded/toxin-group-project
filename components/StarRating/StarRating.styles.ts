import styled, { css } from 'styled-components';

import { materialIcons } from 'shared/styles/mixins';

import { StarProps } from './StarRating.types';

const StarRating = styled.div`
  display: flex;
`;

const Star = styled.button<StarProps>`
  ${(props) => {
    const { gradients } = props.theme;
    const { iconName } = props;

    return css`
      ${materialIcons}
      background-image: ${gradients.primary};
      font-size: 1.7rem;
      border: 0;
      background-color: transparent;
      transition: 0.3s;

      &:hover {
        opacity: 0.6;
      }

      &:before {
        content: '${iconName}';
      }
    `;
  }}
`;

export { StarRating, Star };
