import CircularProgress from '@material-ui/core/CircularProgress';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { memo, useState } from 'react';

import { NavMenu } from 'shared/view/components';
import { NavLinks } from 'shared/view/components/NavMenu/NavMenu.fixture';

import { HeaderUserLogin } from './components/HeaderUserLogin/HeaderUserLogin';
import { HeaderUserProfile } from './components/HeaderUserProfile/HeaderUserProfile';
import { LanguageDropdown } from './components/LanguageDropdown/LanguageDropdown';
import * as S from './Header.styles';

export type Props = {
  displayName?: string;
  wasFinishedAuthChecking: boolean;
};

const Header = memo(({ displayName, wasFinishedAuthChecking }: Props) => {
  const [isOpenMobileMenu, setMobileMenuStatus] = useState(false);

  const changeOpenMenuStatus = () => setMobileMenuStatus(!isOpenMobileMenu);

  return (
    <S.Header>
      <S.HeaderLogoWrapper>
        <S.HeaderLogo />
        <S.HamburgerButtonWrapper onClick={changeOpenMenuStatus}>
          {isOpenMobileMenu ? <MenuOpenIcon /> : <MenuIcon />}
        </S.HamburgerButtonWrapper>
      </S.HeaderLogoWrapper>
      <S.MobileMenu isShown={isOpenMobileMenu}>
        <LanguageDropdown />
        <NavMenu menu={NavLinks} />
        {wasFinishedAuthChecking ? (
          <S.AccountPanel>
            {displayName ? <HeaderUserProfile displayName={displayName} /> : <HeaderUserLogin />}
          </S.AccountPanel>
        ) : (
          <CircularProgress />
        )}
      </S.MobileMenu>
    </S.Header>
  );
});

export { Header };
