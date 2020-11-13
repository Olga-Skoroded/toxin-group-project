import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store } from 'redux/store';
import { GlobalStyle } from 'shared/styles/global.styles';
import { purpleThemePalette } from 'shared/styles/theme';
import { Favicon } from 'shared/view/elements';
import 'services/i18next';
import 'shared/styles/fonts.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={purpleThemePalette}>
      <Provider store={store}>
        <Component {...pageProps} />
        <Favicon />
        <GlobalStyle />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
