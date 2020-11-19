import Head from 'next/head';
import { memo } from 'react';

import { IndexPage } from 'modules/IndexPage/IndexPage';

const Index = memo(() => (
  <>
    <Head>
      <title>Toxin | Главная</title>
      <meta name="description" content="Подберите и забронируйте номер в нашем отеле" />
      <meta name="keywords" content="отель, номер, бронирование, забронировать" />
    </Head>
    <IndexPage />
  </>
));

export default Index;
