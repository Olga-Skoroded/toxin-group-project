import { memo, MouseEvent } from 'react';

import * as S from './NumberInput.styles';

type Props = {
  min: number;
  max: number;
  currentValue: number;
  name: string;
  onIncrement: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  onDecrement: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
};

const NumberInput = memo(({ min, max, currentValue, onDecrement, onIncrement, name }: Props) => (
  <S.InputContainer>
    <S.Button disabled={currentValue === min} onClick={onDecrement} type="button">
      -
    </S.Button>
    <S.Input readOnly value={currentValue} name={name} />
    <S.Button disabled={currentValue === max} onClick={onIncrement} type="button">
      +
    </S.Button>
  </S.InputContainer>
));

export { NumberInput };
