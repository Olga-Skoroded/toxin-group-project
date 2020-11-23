import { Avatar as MaterialAvatar } from '@material-ui/core';
import { memo } from 'react';

type Props = {
  photoURL: string;
  className?: string;
};

const Avatar = memo(({ photoURL, className }: Props) => {
  return <MaterialAvatar src={photoURL} className={className} component="div" />;
});

export { Avatar };
