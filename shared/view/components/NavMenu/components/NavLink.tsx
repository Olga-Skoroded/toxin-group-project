import CloseIcon from '@material-ui/icons/Close';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Link from 'next/link';
import { useState, useRef, useEffect, memo, KeyboardEvent, FocusEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { NavMenuLink, NavSubMenu } from '../NavMenu.model';
import * as S from './NavLink.styles';

const NavLink = memo(({ name, path, subMenu }: NavMenuLink) => {
  const LinkMenuRef = useRef(null);
  const [isShownSubMenu, setSubMenuShownStatus] = useState(false);

  const expandSubMenu = () => {
    setSubMenuShownStatus(true);
  };

  const changeSubMenuStatus = () => {
    setSubMenuShownStatus((prevState) => !prevState);
  };

  const handleIconKeyDown = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.keyCode === 32) {
      e.preventDefault();
      changeSubMenuStatus();
    }
  };

  const handleSubMenuBlur = (e: FocusEvent<HTMLUListElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as HTMLUListElement)) {
      setSubMenuShownStatus(false);
    }
  };

  useEffect(() => {
    const handleDocumentMouseMove = (e: MouseEvent) => {
      if (isShownSubMenu && !LinkMenuRef.current.contains(e.target)) setSubMenuShownStatus(false);
    };

    document.addEventListener('mousemove', handleDocumentMouseMove);
    return () => document.removeEventListener('mousemove', handleDocumentMouseMove);
  }, [isShownSubMenu]);

  const { t } = useTranslation();

  return (
    <S.NavLink ref={LinkMenuRef}>
      <Link href={path} passHref>
        <S.Link key={name} onMouseOver={expandSubMenu} onTouchStart={expandSubMenu}>
          {t(`Links:${name}`)}
        </S.Link>
      </Link>
      {subMenu && (
        <>
          <S.IconExpander onClick={changeSubMenuStatus} onKeyDown={handleIconKeyDown} tabIndex={0}>
            {isShownSubMenu ? <CloseIcon /> : <ExpandMore />}
          </S.IconExpander>

          <S.SubMenuList onBlur={handleSubMenuBlur} isShown={isShownSubMenu}>
            {subMenu.map((subMenuLink: NavSubMenu) => (
              <S.SubMenuItem key={subMenuLink.path}>
                <Link href={subMenuLink.path} passHref>
                  <S.SubMenuLink>{t(`Links:${subMenuLink.name}`)}</S.SubMenuLink>
                </Link>
              </S.SubMenuItem>
            ))}
          </S.SubMenuList>
        </>
      )}
    </S.NavLink>
  );
});

export { NavLink };
