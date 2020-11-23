import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import { Field } from 'react-final-form';

import * as S from './RadioButton.styles';

type Props = {
  name: string;
  label: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const RadioButton = memo(({ name, label, value, onChange }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <Field
      name={name}
      value={value}
      onChange={handleChange}
      type="radio"
      render={({ input }) => (
        <S.RadioButton>
          <S.HiddenInput {...input} />
          <S.Checkmark />
          <S.Label>{label}</S.Label>
        </S.RadioButton>
      )}
    />
  );
});

export { RadioButton };
