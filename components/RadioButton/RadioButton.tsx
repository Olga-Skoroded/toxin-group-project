import { InputHTMLAttributes } from 'react';
import { Field } from 'react-final-form';

import * as S from './RadioButton.styles';

type Props = {
  name: string;
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const RadioButton: React.FC<Props> = ({ name, label, value, onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <Field
      name={name}
      value={value}
      onChange={handleChange}
      type="radio"
      render={(props) => (
        <S.RadioButton>
          <S.HiddenInput {...props.input} />
          <S.Checkmark />
          <S.Label>{label}</S.Label>
        </S.RadioButton>
      )}
    />
  );
};

export default RadioButton;
