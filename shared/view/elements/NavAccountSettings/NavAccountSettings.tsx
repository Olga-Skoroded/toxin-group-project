import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './NavAccountSettings.styles';

type Props = {
  title: string;
};

const NavAccountSettings = memo(({ title }: Props) => {
  const { t } = useTranslation('AccountSettingsPage');

  return (
    <S.NavAccountSettings>
      <Link href="/profile" passHref>
        <S.Link>{t('Account')}</S.Link>
      </Link>
      <NavigateNextIcon />
      {title}
    </S.NavAccountSettings>
  );
});

export { NavAccountSettings };
