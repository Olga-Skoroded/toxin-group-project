import * as S from './HeaderUserLogin.styles';

const HeaderUserLogin: React.FC = (): JSX.Element => (
  <S.HeaderUserLogin>
    <S.HeaderLoginButton isFlat isLink={false}>
      Войти
    </S.HeaderLoginButton>
    <S.HeaderLoginButton isFlat isLink={false} isFilled>
      Зарегистрироваться
    </S.HeaderLoginButton>
  </S.HeaderUserLogin>
);

export default HeaderUserLogin;