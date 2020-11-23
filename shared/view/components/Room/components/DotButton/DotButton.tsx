import { memo } from 'react';

import { DotButtonProps } from './DotButton.model';
import * as S from './DotButton.styles';

const DotButton = memo((props: DotButtonProps) => {
  return <S.DotButton {...props} type="button" />;
});

export { DotButton };
