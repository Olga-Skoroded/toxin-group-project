import { memo } from 'react';

import { SocialMediaLink } from './components/SocialMediaLink';
import { defaultProps } from './SocialMedia.fixture';
import { SocialMediaProps } from './SocialMedia.model';
import * as S from './SocialMedia.style';

const SocialMedia = memo(({ items = defaultProps }: SocialMediaProps) => (
  <S.List>
    {items &&
      items.map((item) => (
        <S.ListItem key={item.href}>
          <SocialMediaLink {...item} />
        </S.ListItem>
      ))}
  </S.List>
));

export { SocialMedia };
