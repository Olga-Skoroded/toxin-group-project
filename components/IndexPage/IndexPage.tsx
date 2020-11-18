import { memo } from 'react';

import MainLayout from 'components/MainLayout/MainLayout';

import Banner from './components/Banner/Banner';
import { BannerMessage } from './IndexPage.fixture';

const IndexPage = memo(() => (
  <MainLayout>
    <Banner message={BannerMessage} />
  </MainLayout>
));

export default IndexPage;
