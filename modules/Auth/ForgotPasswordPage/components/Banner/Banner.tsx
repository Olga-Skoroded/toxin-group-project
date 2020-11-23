import { memo } from 'react';

import { ForgotPasswordForm } from 'features/Auth/ForgotPasswordForm/ForgotPasswordForm';

import * as S from './Banner.styles';

const Banner = memo(() => (
  <S.Banner>
    <ForgotPasswordForm />
  </S.Banner>
));

export { Banner };
