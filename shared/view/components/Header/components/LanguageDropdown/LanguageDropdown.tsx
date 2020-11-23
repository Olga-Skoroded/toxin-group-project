import CloseIcon from '@material-ui/icons/Close';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useState, useEffect, useRef, memo } from 'react';
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

  const openMenu = () => setShownMenu(true);

  const setLanguage = (evt: React.MouseEvent<HTMLDivElement>) => {
    const targetElement: HTMLDivElement = evt.target as HTMLDivElement;

    const targetLanguage = targetElement.getAttribute('data-language');

    setNewLanguage(targetLanguage);
  };

  const dropdownLink = useRef(null);

  useEffect(() => {
    const handleDocumentMouseMove = (e: TouchEvent) => {
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
      <>
        <S.IconExpander onClick={openMenu} onTouchStart={openMenu}>
          {isShownMenu ? <CloseIcon /> : <ExpandMore />}
        </S.IconExpander>
        <S.MenuContainer isShownMenu={isShownMenu}>
          {availableLanguages.map((item, index) => (
            <S.MenuItem key={index.toString()} data-language={item.lang} onClick={setLanguage}>
              {item.desc}
            </S.MenuItem>
          ))}
        </S.MenuContainer>
      </>
    </S.Container>
  );
});

const ConnectedComponent = connect(mapState, mapDispatch)(LanguageDropdown);
export { ConnectedComponent as LanguageDropdown };
