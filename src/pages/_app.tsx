import React, { ReactElement, ReactNode } from 'react';
import '@/styles/globals.css'
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';

import theme from '@/theme/themeConfig';
import { NextPage } from 'next';
import { Provider } from 'react-redux';
import { store } from "@/store";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// const ConfigProvider = dynamic(() => import('antd/es/config-provider'), { ssr: false });

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  )
};

export default App;