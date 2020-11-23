import { memo, useState } from 'react';
import { Field } from 'react-final-form';

import { formatNumber } from 'utils/number.utils';

import * as S from './Slider.styles';

type Props = {
  initialValue: number | number[];
  name: string;
  max?: number;
  min?: number;
  step?: number;
  currency?: string;
  title?: string;
  showValue?: boolean;
  onChange?: (value: number | number[]) => void;
};

const Slider = memo(
  ({ initialValue, name, max = 16000, min = 0, step = 100, title, showValue, onChange }: Props) => {
    const [value, setValue] = useState(initialValue);

    const getValuesRangeText = () => {
      if (Array.isArray(value)) {
        const [from, to] = value;
        return `${formatNumber(from)} - ${formatNumber(to)}`;
      }
      return `${formatNumber(value)}`;
    };

    return (
      <Field
        name={name}
        render={({ input }) => {
          const handleChange = (
            _: React.ChangeEvent<HTMLInputElement>,
            currentValue: number | number[],
          ) => {
            setValue(currentValue);
            onChange && onChange(currentValue);
          };

          const handlePointerUp = () => {
            if (Array.isArray(value)) {
              const [from, to] = value;
              input.onChange({ from, to });
            } else {
              input.onChange(value);
            }
          };

          return (
            <>
              <S.Description title={title}>
                {title && <S.Title>{title}</S.Title>}
                {showValue && <S.Value>{getValuesRangeText()}</S.Value>}
              </S.Description>
              <S.Slider
                aria-labelledby={name}
                max={max}
                min={min}
                onChange={handleChange}
                onPointerUp={handlePointerUp}
                value={value}
                step={step}
              />
            </>
          );
        }}
      />
    );
  },
);

export { Slider };
