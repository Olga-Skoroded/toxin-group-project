import CloseIcon from '@material-ui/icons/Close';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useState, useEffect, useRef, memo, KeyboardEvent, MouseEvent, FocusEvent } from 'react';
import { connect } from 'react-redux';

import { changeLanguage } from 'redux/Language/redux/actions';
import { AppState } from 'redux/store.model';
import { formatLanguage } from 'shared/helpers/formatLanguage';

import * as S from './LanguageDropdown.styles';

type StateToProps = {
  currentLanguage: string;
};

type Props = {
  currentLanguage: string;
  setNewLanguage: (newLanguage: string) => void;
};

const mapState = (state: AppState): StateToProps => ({
  currentLanguage: state.language.currentLanguage,
});

const mapDispatch = {
  setNewLanguage: changeLanguage,
};

const LanguageDropdown = memo(({ currentLanguage, setNewLanguage }: Props) => {
  const [isShownMenu, setShownMenu] = useState(false);

  const openMenu = () => {
    setShownMenu(true);
  };

  const handleIconClick = () => {
    setShownMenu((prevState) => !prevState);
  };

  const handleIconKeyDown = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.keyCode === 32) {
      e.preventDefault();
      setShownMenu((prevState) => !prevState);
    }
  };

  const setLanguage = (e: MouseEvent<HTMLLIElement> | KeyboardEvent<HTMLLIElement>) => {
    const targetElement = e.target as HTMLLIElement;

    const targetLanguage = targetElement.getAttribute('data-language');

    setNewLanguage(targetLanguage);
  };

  const handleLanguageKeyDown = (e: KeyboardEvent<HTMLLIElement>) => {
    if (e.keyCode === 32) {
      e.preventDefault();
      setLanguage(e);
    }
  };

  const handleSubMenuBlur = (e: FocusEvent<HTMLUListElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as HTMLUListElement)) {
      setShownMenu(false);
    }
  };

  const dropdownLink = useRef(null);

  useEffect(() => {
    const handleDocumentMouseMove = (e: globalThis.MouseEvent) => {
      if (isShownMenu && !dropdownLink.current.contains(e.target)) setShownMenu(false);
    };

    document.addEventListener('mousemove', handleDocumentMouseMove);
    return () => document.removeEventListener('mousemove', handleDocumentMouseMove);
  }, [isShownMenu]);

  const availableLanguages = [
    { lang: 'ru', desc: 'Русский' },
    { lang: 'en', desc: 'English' },
  ];

  return (
    <S.Container ref={dropdownLink}>
      <S.SelectedLanguage onMouseOver={openMenu} onTouchStart={openMenu}>
        {formatLanguage(currentLanguage)}
      </S.SelectedLanguage>
      <S.IconExpander onClick={handleIconClick} onKeyDown={handleIconKeyDown} tabIndex={0}>
        {isShownMenu ? <CloseIcon /> : <ExpandMore />}
      </S.IconExpander>
      <S.MenuContainer onBlur={handleSubMenuBlur} isShownMenu={isShownMenu}>
        {availableLanguages.map((item, index) => (
          <S.MenuItem
            key={index.toString()}
            data-language={item.lang}
            onClick={setLanguage}
            onKeyDown={handleLanguageKeyDown}
            tabIndex={0}
          >
            {item.desc}
          </S.MenuItem>
        ))}
      </S.MenuContainer>
    </S.Container>
  );
});

const ConnectedComponent = connect(mapState, mapDispatch)(LanguageDropdown);
export { ConnectedComponent as LanguageDropdown };
