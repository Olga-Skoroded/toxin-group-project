import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { useState, useRef, useEffect, memo } from 'react';

import * as S from './Expander.styles';

type Props = {
  title: string;
  isDefaultOpen: boolean;
  children: JSX.Element;
};

const Expander = memo(({ title, isDefaultOpen, children }: Props) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);
  const expander = useRef(null);

  const handleDocumentClick = (event: MouseEvent) => {
    if (isOpen && !expander.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  });

  const handleHeaderClick = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <S.Expander ref={expander}>
      <S.Header onClick={handleHeaderClick} type="button">
        <S.Title>{title}</S.Title>
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </S.Header>
      <S.Content isOpen={isOpen}>{children}</S.Content>
    </S.Expander>
  );
});

export { Expander };
