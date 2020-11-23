import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { UILogo } from 'shared/view/elements';

import { colors, types } from './ColorsTypesPage.fixture';
import * as S from './ColorsTypesPage.styles';
import { UIColorsList } from './components/UI-ColorsList/UI-ColorsList';
import { UITypesList } from './components/UI-TypesList/UI-TypesList';

const ColorsTypesPage = memo(() => {
  const { t } = useTranslation('ColorsTypesPage');

  return (
    <S.ColorsTypesLayout>
      <S.Logo>
        <UILogo />
      </S.Logo>
      <S.Content>
        <S.Title>{t('Color palette and text variations')}</S.Title>
        <S.Wrapper>
          <UIColorsList colors={colors} />
          <UITypesList types={types} />
        </S.Wrapper>
      </S.Content>
    </S.ColorsTypesLayout>
  );
});

export { ColorsTypesPage };
