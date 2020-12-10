import { memo } from 'react';

import { Avatar } from 'shared/view/elements/Avatar/Avatar';

import * as S from './Header.styles';

type Props = {
  name: string;
  avatarUrl: string;
  isMinimized: boolean;
  setMinimized: () => void;
};

const Header = memo(
  ({ name, avatarUrl, isMinimized, setMinimized }: Props): JSX.Element => (
    <S.Header>
      <Avatar photoURL={avatarUrl} />
      {name}
      <S.MinimizeButton onClick={setMinimized} onTouchStart={setMinimized}>
        {isMinimized ? '≡' : '–'}
      </S.MinimizeButton>
    </S.Header>
  ),
);

export { Header };
