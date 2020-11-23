import { ChangeEvent, memo } from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './Checkbox.styles';

type Props = {
  name: string;
  isChecked?: boolean;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  title?: string;
};

const Checkbox = memo(({ name, isChecked, label, title, onChange }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const { t } = useTranslation('CheckboxesList');

  return (
    <S.Checkbox>
      <S.HiddenCheckbox
        name={name}
        type="checkbox"
        defaultChecked={isChecked}
        onChange={handleChange}
      />
      <S.Checkmark />
      <S.Label title={title}>
        {title && <S.Title>{t(title)}</S.Title>}
        <span>{t(label)}</span>
      </S.Label>
    </S.Checkbox>
  );
});

export { Checkbox };
