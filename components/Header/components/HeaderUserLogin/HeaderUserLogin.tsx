import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './HeaderUserLogin.styles';

const HeaderUserLogin = memo(() => {
  const { t } = useTranslation(['Buttons', 'Shared']);

  return (
    <S.HeaderUserLogin>
      <S.HeaderLoginButton href="/auth" isFlat>
        {t('Sign In')}
      </S.HeaderLoginButton>
      <S.HeaderLoginButton href="/registration" isFilled isFlat>
        {t('Shared:Register')}
      </S.HeaderLoginButton>
    </S.HeaderUserLogin>
  );
});

export default HeaderUserLogin;
