import { memo } from 'react';

import { Footer, Header } from 'shared/view/components';

import * as S from './HeadersAndFootersPage.styles';

const HeadersAndFootersPage = memo(() => (
  <S.Container>
    <Header wasFinishedAuthChecking />
    <Header wasFinishedAuthChecking />
    <Footer />
  </S.Container>
));

export { HeadersAndFootersPage };
