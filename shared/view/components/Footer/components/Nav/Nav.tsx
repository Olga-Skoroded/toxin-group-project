import { memo } from 'react';

import { FooterNav } from 'shared/view/components';

import * as S from './Nav.styles';

const Nav = memo(() => (
  <S.Nav>
    <FooterNav />
  </S.Nav>
));

export { Nav };
