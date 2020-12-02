import Link from 'next/link';
import { memo } from 'react';

import * as S from './Card.styles';

type Props = {
  title: string;
  description: string;
  href: string;
};

const Card = memo(({ title, description, href }: Props) => (
  <Link href={href} passHref>
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Card>
  </Link>
));

export { Card };
