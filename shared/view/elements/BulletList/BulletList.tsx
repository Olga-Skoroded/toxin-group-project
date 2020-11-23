import { memo } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import * as S from './BulletList.styles';

type Props = WithTranslation & {
  items: string[];
};

const BulletList = memo(({ items = ['No items passed'], t }: Props) => (
  <S.List>
    {items.map((el) => (
      <S.Item key={el}>{t(el)}</S.Item>
    ))}
  </S.List>
));

const TranslatedComponent = withTranslation('Bullets')(BulletList);
export { TranslatedComponent as BulletList };
