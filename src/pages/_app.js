import '@/styles/globals.css'
import { useState, useEffect } from 'react';
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';
import Layout from '@/components/common/Layout/Layout'
import store from '@/redux/app/store';
import CommingSoonNew from '@/components/ComingSoon';
import { Toaster } from "react-hot-toast";
import Head from 'next/head';
import { DOMAIN_NAME } from '@/utils/BizSettings';


const queryClient = new QueryClient()


export default function App({ Component, pageProps }) {
  
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else { 
    return (
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Provider store={store}>
            <Layout>
                <Head>
                  <meta name='viewport' content='minimum-scale=1,  width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
                  <link rel="preconnect" href={DOMAIN_NAME} />
                  <link rel="dns-prefetch" href={DOMAIN_NAME} />
                </Head>
                <Component {...pageProps} />
              <Toaster />
            </Layout>
          </Provider>
        {/* <CommingSoonNew /> */}
        </Hydrate>
      </QueryClientProvider>
    )
  }
}
