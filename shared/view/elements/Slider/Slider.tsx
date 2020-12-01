import { ChangeEvent, memo } from 'react';

import { SliderProps } from './Slider.model';
import * as S from './Slider.styles';

const Slider = memo(
  ({ value, name, max = 16000, min = 0, step = 100, onChange, onPointerUp }: SliderProps) => {
    const handleChange = (_: ChangeEvent<HTMLInputElement>, currentValue: number | number[]) => {
      onChange && onChange(currentValue);
    };

    return (
      <S.Slider
        aria-labelledby={name}
        max={max}
        min={min}
        onChange={handleChange}
        onPointerUp={onPointerUp}
        value={value}
        step={step}
      />
    );
  },
);

export { Slider };
