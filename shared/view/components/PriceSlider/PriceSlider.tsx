import { memo, useState } from 'react';
import { Field } from 'react-final-form';

import { Slider } from 'shared/view/elements';
import { SliderProps } from 'shared/view/elements/Slider/Slider.model';
import { formatNumber } from 'utils/number.utils';

import * as S from './PriceSlider.styles';

type Props = {
  currency?: string;
  title?: string;
  showValue?: boolean;
} & SliderProps;

const PriceSlider = memo(
  ({ value, name, max = 16000, min = 0, step = 100, title, showValue }: Props) => {
    const [currentValue, setCurrentValue] = useState(value);

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
          const handleChange = (price: number | number[]) => {
            setCurrentValue(price);
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
              <Slider
                name={name}
                max={max}
                min={min}
                onChange={handleChange}
                onPointerUp={handlePointerUp}
                value={currentValue}
                step={step}
              />
            </>
          );
        }}
      />
    );
  },
);

export { PriceSlider };
