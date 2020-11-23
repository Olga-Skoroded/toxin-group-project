import { IconName } from '@fortawesome/fontawesome-common-types';

export type SocialMediaItem = {
  icon: IconName;
  text: string;
  href: string;
};

export type SocialMediaProps = {
  items?: SocialMediaItem[];
};
