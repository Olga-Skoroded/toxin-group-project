import { memo } from 'react';

import { SocialMediaItem } from '../SocialMedia.model';
import * as S from './SocialMediaLink.styles';

const SocialMediaLink = memo(({ href, icon, text }: SocialMediaItem) => (
  <S.Link target="_blank" rel="noopener noreferrer" icon={icon} text={text} href={href}>
    <S.Label>{text}</S.Label>
  </S.Link>
));

export { SocialMediaLink };
