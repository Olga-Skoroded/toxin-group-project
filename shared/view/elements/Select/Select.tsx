import { memo } from 'react';
import { Field } from 'react-final-form';

import * as S from './Select.styles';

type Props = {
  name: string;
  label: string;
  values: { value: string | number; text: string }[];
  placeholder?: string;
};

const Select = memo(({ name, label, values, placeholder }: Props) => (
  <Field
    name={name}
    render={({ input }) => (
      <S.Label>
        {label}
        <S.Select {...input}>
          {placeholder && (
            <option value="" disabled selected hidden>
              {placeholder}
            </option>
          )}
          {values.map(({ value, text }) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </S.Select>
      </S.Label>
    )}
  />
));

export { Select };
