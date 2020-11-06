import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Favicon from 'components/Favicon/Favicon';
import { store } from 'redux/store';
import GlobalStyle from 'shared/styles/global.styles';
import purpleThemePalette from 'shared/styles/theme';
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
