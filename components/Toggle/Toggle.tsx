import { Field } from 'react-final-form';

import * as S from './Toggle.styles';

type Props = {
  name: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Toggle: React.FC<Props> = ({ name, label, value, onChange }: Props) => (
  <Field
    name={name}
    value={value}
    onChange={onChange}
    type="checkbox"
    render={(props) => (
      <S.Toggle>
        <S.HiddenInput {...props.input} />
        <S.Checkmark />
        {label && <S.Label>{label}</S.Label>}
      </S.Toggle>
    )}
  />
);

export default Toggle;
