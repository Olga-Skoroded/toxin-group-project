import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { NavMenu } from 'shared/view/components';

import * as S from './HeaderUserProfile.styles';

type Props = {
  displayName?: string;
};

const HeaderUserProfile = memo(({ displayName }: Props) => {
  const { t } = useTranslation('HeaderUserProfile');

  const ProfileLink = [
    {
      name: displayName,
      path: '/profile',
      subMenu: [
        { name: t('HeaderProfile:To profile'), path: '/profile' },
        { name: t('HeaderProfile:Logout'), path: '/auth/logout' },
      ],
    },
  ];

  return (
    <S.HeaderUserProfile>
      <NavMenu menu={ProfileLink} />
    </S.HeaderUserProfile>
  );
});

export { HeaderUserProfile };
