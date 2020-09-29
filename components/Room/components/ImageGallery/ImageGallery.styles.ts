import styled, { css } from 'styled-components';

import { materialIcons } from 'shared/styles/mixins';

import { ImageProps } from '../../Room.types';

const Img = styled.img<ImageProps>`
  ${(props) => {
    const { isShown } = props;
    return css`
      position: absolute;
      opacity: 0;
      transition: 0.5s;
      user-select: none;

      ${isShown &&
      css`
        opacity: 1;
      `}
    `;
  }}
`;

const Dots = styled.ul`
  display: flex;
  position: absolute;
  z-index: 10;
  right: 1.0714rem;
  bottom: 1.0714rem;
`;

const Dot = styled.li`
  list-style: none;

  &:not(:last-child) {
    margin-right: 0.2679rem;
  }
`;

const ArrowContainer = styled.div`
  display: none;
  position: absolute;
  width: 3rem;
  height: 100%;
  z-index: 5;
`;

const ArrowPrevContainer = styled(ArrowContainer)`
  left: 0;
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0));
`;

const ArrowNextContainer = styled(ArrowContainer)`
  right: 0;
  background-image: linear-gradient(-90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0));
`;

const Container = styled.div`
  position: relative;
  min-height: 10.7857rem;

  &:hover ${ArrowContainer} {
    display: block;
  }

  @media (max-width: 1050px) {
    ${ArrowContainer} {
      display: block;
    }
  }
`;

const ArrowButton = styled.button`
  ${materialIcons};
  border: 0;
  background-color: white;
  font-size: 1.7rem;
  position: absolute;
  left: 0.73rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
`;

const ArrowButtonNext = styled(ArrowButton)`
  &::before {
    content: 'keyboard_arrow_right';
  }
`;

const ArrowButtonPrev = styled(ArrowButton)`
  &::before {
    content: 'keyboard_arrow_left';
  }
`;

export {
  Container,
  Img,
  Dots,
  Dot,
  ArrowPrevContainer,
  ArrowNextContainer,
  ArrowButtonNext,
  ArrowButtonPrev,
};
