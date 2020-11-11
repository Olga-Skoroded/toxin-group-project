import Link from 'next/link';

import { Props } from './TextButton.model';
import * as S from './TextButton.styles';

const TextButton: React.FC<Props> = ({ isSecondary = false, href, disabled, ...rest }: Props) =>
  href ? (
    <Link href={href} passHref>
      <S.TextButton as="a" {...rest} isSecondary={isSecondary} />
    </Link>
  ) : (
    <S.TextButton as="button" disabled={disabled} {...rest} isSecondary={isSecondary} />
  );

export default TextButton;
