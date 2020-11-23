import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { TextButton } from 'shared/view/elements';

import { PasswordUpdate } from '../PasswordUpdate/PasswordUpdate';
import * as S from './Login.styles';

const Login = memo(() => {
  const [isEdit, setEdit] = useState(false);

  const handleEditButtonClick = () => setEdit((prevValue) => !prevValue);

  const { t } = useTranslation('LoginAndSecurityPage');

  return (
    <S.Login>
      <S.Title>{t('Login')}</S.Title>
      <S.Header>
        <S.Subtitle>{t('Password')}</S.Subtitle>
        <TextButton type="button" onClick={handleEditButtonClick}>
          {isEdit ? t('Cancel') : t('Update')}
        </TextButton>
      </S.Header>
      <S.Content>
        {isEdit ? (
          <PasswordUpdate onChange={handleEditButtonClick} />
        ) : (
          <S.Description>{t('Changing the current password')}</S.Description>
        )}
      </S.Content>
    </S.Login>
  );
});

export { Login };
