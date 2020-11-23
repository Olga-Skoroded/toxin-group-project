import { memo } from 'react';

import * as S from './NavBar.styles';

type Props = {
  onPreviousClick?(callback?: () => void): void;
  onNextClick?(callback?: () => void): void;
};

const NavBar = memo(({ onPreviousClick, onNextClick }: Props) => {
  const handlePreviousButtonClick = () => onPreviousClick();
  const handleNextButtonClick = () => onNextClick();

  return (
    <S.Container>
      <S.NavBarButton type="button" onClick={handlePreviousButtonClick}>
        arrow_back
      </S.NavBarButton>
      <S.NavBarButton type="button" onClick={handleNextButtonClick}>
        arrow_forward
      </S.NavBarButton>
    </S.Container>
  );
});

export { NavBar };
