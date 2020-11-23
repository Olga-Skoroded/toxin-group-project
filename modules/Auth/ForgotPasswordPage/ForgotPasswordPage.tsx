import { memo } from 'react';

import { MainLayout } from 'features/shared/MainLayout/MainLayout';

import { Banner } from './components/Banner/Banner';

const ForgotPasswordPage = memo(() => (
  <MainLayout>
    <Banner />
  </MainLayout>
));

export { ForgotPasswordPage };
