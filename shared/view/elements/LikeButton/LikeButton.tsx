import FavoriteIcon from '@material-ui/icons/Favorite';
import { ChangeEvent, memo, useState } from 'react';

import * as S from './LikeButton.styles';

type Props = {
  count: number;
  isActive?: boolean;
  onCheckboxChange?: (e: ChangeEvent) => void;
};

const LikeButton = memo((props: Props) => {
  const { count, isActive } = props;
  const [likesCount, setLikesCount] = useState(count || 0);
  const [isLikeButtonPressed, setLikeButtonStatus] = useState(isActive || false);

  const handleLikeButtonClick = () => {
    setLikeButtonStatus(!isLikeButtonPressed);

    const newLikesCount = isLikeButtonPressed ? likesCount - 1 : likesCount + 1;
    setLikesCount(newLikesCount);
  };

  return (
    <S.LikeLabel isActive={isLikeButtonPressed}>
      <FavoriteIcon />
      <S.LikeSpan>{likesCount}</S.LikeSpan>
      <S.LikeInput type="checkbox" onChange={handleLikeButtonClick} checked={isLikeButtonPressed} />
      <S.LikeOutline />
    </S.LikeLabel>
  );
});

export { LikeButton };
