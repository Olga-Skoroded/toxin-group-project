import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { UIColor } from '../UI-Color/UI-Color';
import * as S from './UI-ColorsList.styles';

type Color = {
  color: string;
  title: string;
  opacity: number;
};

type Props = {
  colors: Array<Color>;
};

const UIColorsList = memo(({ colors }: Props) => {
  const { t } = useTranslation('Ui-ColorsList');

  return (
    <section>
      <S.Title>{t('Color palette')}</S.Title>
      <S.List lang="en">
        {colors.map((color) => (
          <li key={color.title}>
            <UIColor color={color.color} title={color.title} opacity={color.opacity} />
          </li>
        ))}
      </S.List>
    </section>
  );
});

export { UIColorsList };
