import { memo, useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import Lightbox from 'react-image-lightbox';

import { DotButton } from '../DotButton/DotButton';
import * as S from './ImageGallery.styles';

type Props = {
  images: string[];
  thumbnails?: string[];
};

const defaultState = [false, false, false, false];

const ImageGallery = memo(
  ({
    images = ['/img/1.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg'],
    thumbnails = images,
  }: Props) => {
    const [imageStates, setImageStates] = useState([true, false, false, false]);
    const [isOpen, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const handleDotClick = (e: MouseEvent<HTMLButtonElement>) => {
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

    const handleImageClick = (index: number) => {
      setCurrentImage(index);
      setOpen(true);
    };

    const { t } = useTranslation('ImageGallery');

    return (
      <S.Container>
        <S.ArrowPrevContainer>
          <S.ArrowButtonPrev aria-label={t('Previous image')} onClick={handleArrowPrevClick} />
        </S.ArrowPrevContainer>
        {thumbnails.map((path, index) => (
          <S.Img
            key={path}
            src={path}
            isShown={imageStates[index]}
            alt="Фото номера"
            onClick={() => {
              handleImageClick(index);
            }}
          />
        ))}
        {isOpen && (
          <Lightbox
            mainSrc={images[currentImage]}
            nextSrc={images[(currentImage + 1) % images.length]}
            prevSrc={images[(currentImage + images.length - 1) % images.length]}
            onCloseRequest={() => setOpen(false)}
            onMovePrevRequest={() => {
              setCurrentImage((currentImage + images.length - 1) % images.length);
              handleArrowPrevClick();
            }}
            onMoveNextRequest={() => {
              setCurrentImage((currentImage + 1) % images.length);
              handleArrowNextClick();
            }}
            prevLabel={t('Previous image')}
            nextLabel={t('Next image')}
            zoomInLabel={t('Zoom in')}
            zoomOutLabel={t('Zoom out')}
            closeLabel={t('Close')}
          />
        )}
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
          <S.ArrowButtonNext aria-label={t('Next image')} onClick={handleArrowNextClick} />
        </S.ArrowNextContainer>
      </S.Container>
    );
  },
);

export { ImageGallery };
