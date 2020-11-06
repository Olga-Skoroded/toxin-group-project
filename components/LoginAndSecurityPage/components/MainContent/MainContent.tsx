import NavAccountSettings from 'components/NavAccountSettings/NavAccountSettings';

import Login from '../Login/Login';
import * as S from './MainContent.styles';

const MainContent = (): JSX.Element => (
  <S.MainContent>
    <NavAccountSettings title="Вход и безопасность" />
    <S.Title>Вход и безопасность</S.Title>
    <Login />
  </S.MainContent>
);

export default MainContent;
