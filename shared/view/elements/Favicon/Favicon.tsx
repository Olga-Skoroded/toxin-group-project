import Head from 'next/head';
import { memo } from 'react';

const Favicon = memo(() => (
  <Head>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
    <link rel="manifest" href="/favicon/site.webmanifest" />
    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#bc9cff" />
    <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
    <meta name="theme-color" content="#bc9cff" />
  </Head>
));

export { Favicon };
