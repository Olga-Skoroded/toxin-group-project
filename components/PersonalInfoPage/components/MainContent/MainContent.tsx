import NavAccountSettings from 'components/NavAccountSettings/NavAccountSettings';

import PersonalInfo from '../PersonalInfo/PersonalInfo';
import * as S from './MainContent.styles';

const MainContent = (): JSX.Element => (
  <S.MainContent>
    <NavAccountSettings title="Личная информация" />
    <S.Title>Личная информация</S.Title>
    <PersonalInfo />
  </S.MainContent>
);

export default MainContent;
