import { Avatar as MaterialAvatar } from '@material-ui/core';

type Props = {
  photoURL: string;
  className?: string;
};

const Avatar: React.FC<Props> = ({ photoURL, className }: Props) => {
  return <MaterialAvatar src={photoURL} className={className} component="div" />;
};

export default Avatar;
