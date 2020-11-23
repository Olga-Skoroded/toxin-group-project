import { memo, useState } from 'react';

import { DotButton } from '../DotButton/DotButton';
import { GalleryProps } from './ImageGallery.model';
import * as S from './ImageGallery.styles';

const defaultState = [false, false, false, false];

const ImageGallery = memo(
  ({ imagePaths = ['/img/1.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg'] }: GalleryProps) => {
    const [imageStates, setImageStates] = useState([true, false, false, false]);

    const handleDotClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const { index } = e.currentTarget.dataset;
      const state = [...defaultState];
      state[index] = true;
      setImageStates(state);
    };

    const makeArrowClickHandler = (increment: number) => () => {
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
          <S.Img key={String(index)} src={path} isShown={imageStates[index]} alt="Фото номера" />
        ))}
        <S.Dots>
          {imageStates.map((el, index) => (
            <S.Dot key={String(index)}>
              <DotButton
                type="button"
                data-index={index}
                onClick={handleDotClick}
                buttonId={index}
                isActive={el}
              />
            </S.Dot>
          ))}
        </S.Dots>
        <S.ArrowNextContainer>
          <S.ArrowButtonNext aria-label="Вперед" onClick={handleArrowNextClick} />
        </S.ArrowNextContainer>
      </S.Container>
    );
  },
);

export { ImageGallery };
