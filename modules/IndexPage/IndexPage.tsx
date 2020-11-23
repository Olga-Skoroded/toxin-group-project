import { memo } from 'react';

import { MainLayout } from 'features/shared/MainLayout/MainLayout';

import { Banner } from './components/Banner/Banner';
import { BannerMessage } from './IndexPage.fixture';

const IndexPage = memo(() => (
  <MainLayout>
    <Banner message={BannerMessage} />
  </MainLayout>
));

export { IndexPage };
