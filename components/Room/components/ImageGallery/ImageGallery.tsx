import { useState } from 'react';

import { GalleryProps } from '../../Room.types';
import DotButton from '../DotButton/DotButton';
import * as S from './ImageGallery.styles';

const defaultState = [false, false, false, false];

const ImageGallery: React.FC<GalleryProps> = ({
  imagePaths = ['/img/room-1.jpg', '/img/room-2.jpg', '/img/room-3.jpg', '/img/room-4.jpg'],
}: GalleryProps) => {
  const [imageStates, setImageStates] = useState([true, false, false, false]);

  const handleDotClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { index } = e.currentTarget.dataset;
    const state = [...defaultState];
    state[index] = true;
    setImageStates(state);
  };

  const makeArrowClickHandler = (increment) => () => {
    setImageStates((prevState) => {
      const shownImageIndex = prevState.indexOf(true);
      const incrementedIndex = shownImageIndex + increment;
      const newIndex =
        incrementedIndex < 0 ? prevState.length - 1 : incrementedIndex % prevState.length;
      const state = [...defaultState];
      state[newIndex] = true;
      return state;
    });
  };

  const handleArrowPrevClick = makeArrowClickHandler(-1);
  const handleArrowNextClick = makeArrowClickHandler(1);

  return (
    <S.Container>
      <S.ArrowPrevContainer>
        <S.ArrowButtonPrev aria-label="Назад" onClick={handleArrowPrevClick} />
      </S.ArrowPrevContainer>
      {imagePaths.map((path, index) => (
        <S.Img key={path + String(index)} src={path} isShown={imageStates[index]} />
      ))}
      <S.Dots>
        {imageStates.map((el, index) => {
          return (
            <S.Dot key={el + String(index)}>
              <DotButton
                type="button"
                data-index={index}
                onClick={handleDotClick}
                buttonId={index}
                isActive={el}
              />
            </S.Dot>
          );
        })}
      </S.Dots>
      <S.ArrowNextContainer>
        <S.ArrowButtonNext aria-label="Вперед" onClick={handleArrowNextClick} />
      </S.ArrowNextContainer>
    </S.Container>
  );
};

export default ImageGallery;