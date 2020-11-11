import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from 'next/link';
import { memo } from 'react';

import * as S from './NavAccountSettings.styles';

type Props = {
  title: string;
};

const NavAccountSettings = memo(({ title }: Props) => (
  <S.NavAccountSettings>
    <Link href="/account-settings" passHref>
      <S.Link>Аккаунт</S.Link>
    </Link>
    <NavigateNextIcon />
    {title}
  </S.NavAccountSettings>
));

NavAccountSettings.displayName = 'NavAccountSettings';

export default NavAccountSettings;
