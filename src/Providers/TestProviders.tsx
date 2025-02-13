import React, { FC } from 'react';
import { Provider } from 'unistore/react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';

import store from '../state/Store';
import { Auth0Provider } from '@auth0/auth0-react';
import ErrorBoundary from '../ErrorBoundary';
import { theme } from '../assets/theme';
import GlobalStyles from '../assets/Global';

const queryClient = new QueryClient();

export const TestProviders: FC = ({ children }) => (
  <ErrorBoundary>
    <GlobalStyles />
    <Auth0Provider domain='test-domain' clientId='test-client-id'>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Provider store={store}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Provider>
      </QueryClientProvider>
    </Auth0Provider>
  </ErrorBoundary>
);
