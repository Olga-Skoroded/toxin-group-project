import Cards from '../Cards/Cards';
import * as S from './MainContent.styles';

const MainContent = (): JSX.Element => (
  <S.MainContent>
    <S.Title>Аккаунт</S.Title>
    <Cards />
  </S.MainContent>
);

export default MainContent;
