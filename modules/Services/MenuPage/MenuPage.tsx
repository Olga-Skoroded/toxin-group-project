import { memo } from 'react';

import { MainLayout } from 'features/shared/MainLayout/MainLayout';

import { MainContent } from './components/MainContent/MainContent';

const MenuPage = memo(() => (
  <MainLayout>
    <MainContent />
  </MainLayout>
));

export { MenuPage };
