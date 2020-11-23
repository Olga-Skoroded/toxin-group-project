import Link from 'next/link';
import { memo } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';

import { NavItemProps } from '../FooterNav.model';
import * as S from './NavItem.styles';

type Props = WithTranslation & NavItemProps;

const NavItem = memo(({ title, items, t }: Props) => (
  <S.Container>
    {title && <S.Title>{t(`Links:${title}`)}</S.Title>}
    <S.List>
      {items &&
        items.map(({ text, href }) => (
          <S.Item key={text}>
            <Link href={href} passHref>
              <S.Link>{t(`Links:${text}`)}</S.Link>
            </Link>
          </S.Item>
        ))}
    </S.List>
  </S.Container>
));

const TranslatedComponent = withTranslation('Links')(NavItem);
export { TranslatedComponent as NavItem };
