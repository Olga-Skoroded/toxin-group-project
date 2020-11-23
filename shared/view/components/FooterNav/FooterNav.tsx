import { memo } from 'react';

import { NavItem } from './components/NavItem';
import { footerNavData } from './FooterNav.fixture';
import { NavProps } from './FooterNav.model';
import * as S from './FooterNav.styles';

const FooterNav = memo(({ items = footerNavData.items }: NavProps) => (
  <S.Container>{items && items.map((item) => <NavItem key={item.title} {...item} />)}</S.Container>
));

export { FooterNav };
