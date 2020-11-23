import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { UIType } from '../UI-Type/UI-Type';
import * as S from './UI-TypesList.styles';

type Type = {
  type: string;
  example: string;
  fontSize: string;
};

type Props = {
  types: Array<Type>;
};

const UITypesList = memo(({ types }: Props) => {
  const { t } = useTranslation('Ui-TypesList');

  return (
    <section>
      <S.Title>{t('Text variations')}</S.Title>
      <S.List lang="en">
        {types.map((type) => (
          <li key={type.type}>
            <UIType type={type.type} example={type.example} fontSize={type.fontSize} />
          </li>
        ))}
      </S.List>
    </section>
  );
});

export { UITypesList };
