import Link from 'next/link';

import * as S from './TextButton.styles';
import { TextButtonProps } from './TextButton.types';

const TextButton: React.FC<TextButtonProps> = ({
  isSecondary = false,
  href,
  disabled,
  ...rest
}: TextButtonProps) =>
  href ? (
    <Link href={href} passHref>
      <S.TextButton as="a" {...rest} isSecondary={isSecondary} />
    </Link>
  ) : (
    <S.TextButton as="button" disabled={disabled} {...rest} isSecondary={isSecondary} />
  );

export default TextButton;
