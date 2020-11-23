import { memo } from 'react';

import * as S from './UI-Type.styles';

type Props = {
  type: string;
  example: string;
  fontSize: string;
};

const UIType = memo(({ type, example, fontSize }: Props) => (
  <S.Type>
    <S.Title titleFontSize={fontSize}>{type}</S.Title>
    <S.Example exampleFontSize={fontSize} exampleType={type}>
      {example}
    </S.Example>
  </S.Type>
));

export { UIType };
