import { ChangeEvent, memo } from 'react';
import { Field } from 'react-final-form';

import * as S from './Toggle.styles';

type Props = {
  name: string;
  label?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Toggle = memo(({ name, label, value, onChange }: Props) => (
  <Field
    name={name}
    value={value}
    onChange={onChange}
    type="checkbox"
    render={({ input }) => (
      <S.Toggle>
        <S.HiddenInput {...input} />
        <S.Checkmark />
        {label && <S.Label>{label}</S.Label>}
      </S.Toggle>
    )}
  />
));

export { Toggle };
