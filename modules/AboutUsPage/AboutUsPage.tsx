import { memo } from 'react';

import { MainLayout } from 'features/shared/MainLayout/MainLayout';

import { MainContent } from './components/MainContent';

const AboutUsPage = memo(() => (
  <MainLayout>
    <MainContent />
  </MainLayout>
));

export { AboutUsPage };
