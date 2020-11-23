import Link from 'next/link';
import { memo } from 'react';

import { Toxin } from 'public/img/svg';

import { Props } from './Logo.model';
import * as S from './Logo.styles';

const Logo = memo((props: Props) => (
  <Link href="/" passHref>
    <S.LogoContainer {...props}>
      <S.Logo />
      <Toxin />
    </S.LogoContainer>
  </Link>
));

export { Logo };
