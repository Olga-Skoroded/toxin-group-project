import { memo } from 'react';

import * as S from './UI-Color.styles';

type Props = {
  color: string;
  title: string;
  opacity: number;
};

const UIColor = memo(({ color, title, opacity }: Props) => (
  <S.Color>
    <S.Palette paletteColor={color} paletteOpacity={opacity} />
    <S.Description>
      <S.Title>{title}</S.Title>
      <div>{color}</div>
    </S.Description>
  </S.Color>
));

export { UIColor };
