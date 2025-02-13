import React from 'react';
import type { AppProps } from 'next/app';
import { Page } from '../src/nextPage';
import { Providers } from '../src/Providers';

type PagePropsType = {
  treeId?: string | null;
};

interface AppPropsType extends AppProps {
  Component: Page;
  pageProps: PagePropsType;
}

export default function MyApp({
  Component,
  pageProps,
}: AppPropsType): JSX.Element {
  const getLayout = Component.getLayout ?? (page => page);
  const Layout = Component.layout ?? (({ children }) => <>{children}</>);
  return (
    <Providers>
      <Layout {...pageProps}>{getLayout(<Component {...pageProps} />)}</Layout>
    </Providers>
  );
}
