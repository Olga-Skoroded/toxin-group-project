import { useState } from 'react';

import TextButton from 'components/TextButton/TextButton';

import PasswordUpdate from '../PasswordUpdate/PasswordUpdate';
import * as S from './Login.styles';

const Login = (): JSX.Element => {
  const [isEdit, setEdit] = useState(false);

  const handleEditButtonClick = () => setEdit((prevValue) => !prevValue);

  return (
    <S.Login>
      <S.Title>Вход</S.Title>
      <S.Header>
        <S.Subtitle>Пароль</S.Subtitle>
        <TextButton type="button" onClick={handleEditButtonClick}>
          {isEdit ? 'Отменить' : 'Изменить'}
        </TextButton>
      </S.Header>
      <S.Content>
        {isEdit ? <PasswordUpdate /> : <S.Description>Изменение текущего пароля</S.Description>}
      </S.Content>
    </S.Login>
  );
};

export default Login;
