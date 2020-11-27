import FavoriteIcon from '@material-ui/icons/Favorite';
import { memo } from 'react';

import * as S from './LikeButton.styles';

type Props = {
  likesCount: number;
  isActive?: boolean;
  onCheckboxChange?: () => void;
};

const LikeButton = memo((props: Props) => {
  const { likesCount, isActive, onCheckboxChange } = props;

  const handleLikeButtonClick = () => {
    onCheckboxChange();
  };

  return (
    <S.LikeLabel isActive={isActive}>
      <FavoriteIcon />
      <S.LikeSpan>{likesCount}</S.LikeSpan>
      <S.LikeInput type="checkbox" onChange={handleLikeButtonClick} checked={isActive} />
      <S.LikeOutline />
    </S.LikeLabel>
  );
});

export { LikeButton };
