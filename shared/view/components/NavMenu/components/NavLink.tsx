import CloseIcon from '@material-ui/icons/Close';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { NavMenuLink, NavSubMenu } from '../NavMenu.types';
import * as S from './NavLink.styles';

const NavLink: React.FC<NavMenuLink> = ({
  isActive,
  name,
  path,
  subMenu,
}: NavMenuLink): JSX.Element => {
  const LinkMenuRef = useRef(null);
  const [isShownSubMenu, setSubMenuShownStatus] = useState(false);
  const expandSubMenu = () => setSubMenuShownStatus(true);

  const changeSubMenuStatus = () => setSubMenuShownStatus(!isShownSubMenu);

  useEffect(() => {
    const handleDocumentMouseMove = (e: TouchEvent) => {
      if (isShownSubMenu && !LinkMenuRef.current.contains(e.target)) setSubMenuShownStatus(false);
    };

    document.addEventListener('mousemove', handleDocumentMouseMove);
    return () => document.removeEventListener('mousemove', handleDocumentMouseMove);
  }, [isShownSubMenu]);

  const { t } = useTranslation();

  return (
    <S.NavLink ref={LinkMenuRef}>
      <Link href={path} passHref>
        <S.Link
          isActive={isActive}
          key={name}
          onMouseOver={expandSubMenu}
          onTouchStart={expandSubMenu}
        >
          {t(`Links:${name}`)}
        </S.Link>
      </Link>
      {subMenu && (
        <>
          <S.IconExpander onClick={expandSubMenu} onTouchStart={changeSubMenuStatus}>
            {isShownSubMenu ? <CloseIcon /> : <ExpandMore />}
          </S.IconExpander>

          <S.SubMenuContainer isShown={isShownSubMenu}>
            {subMenu.map((subMenuLink: NavSubMenu) => (
              <S.SubMenuLink key={subMenuLink.path} href={subMenuLink.path}>
                {subMenuLink.name}
              </S.SubMenuLink>
            ))}
          </S.SubMenuContainer>
        </>
      )}
    </S.NavLink>
  );
};

export { NavLink };
