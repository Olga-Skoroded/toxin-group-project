import { memo } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import * as S from './Benefits.style';

type Props = WithTranslation & {
  items: Array<
    {
      term: string;
      definition: string;
      icon: string;
    } & S.Icon
  >;
};

const Benefits = memo(({ items, t }: Props) => (
  <S.Benefits>
    {items.map(({ term, icon, definition }) => (
      <S.Item key={term}>
        <S.Icon icon={icon} />
        <S.List>
          <S.Term>{t(term)}</S.Term>
          <dd>{t(definition)}</dd>
        </S.List>
      </S.Item>
    ))}
  </S.Benefits>
));

const TranslatedComponent = withTranslation('Benefits')(Benefits);
export { TranslatedComponent as Benefits };
