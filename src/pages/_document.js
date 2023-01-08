import { Html, Head, Main, NextScript } from 'next/document'
import AnalyticsScripts from '../components/common/AnalyticsScripts'
import BodySchemaMarkup from '../components/common/BodySchemaMarkup'
import { APP_NAME, DOMAIN_NAME, Business } from '../utils/Web'
import { GTM_ID } from '../utils/Gtm'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/*  Google Tag Manager for Head tag */}
        <AnalyticsScripts />
        {/* Google Tag Manager inside Head tag End */}

        <meta name='application-name' content={APP_NAME} />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content={APP_NAME} />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-config' content='/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#023020' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />

        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/icons/152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/icons/180x180.png' />
        <link rel='apple-touch-icon' sizes='167x167' href='/icons/167x167.png' />

        <link rel='icon' type='image/png' sizes='32x32' href='/icons/32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/icons/16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' href='/icons/512x512.png' color='#5bbad5' />
        <link rel='shortcut icon' href='/favicon.ico' />

        {/* Schema Markeup - Common */}
        <script type="application/ld+json" 
            dangerouslySetInnerHTML={{
                __html: `{
                "@context": "http://schema.org/",
                "@type": "${Business.bizType}",
                "url": "${DOMAIN_NAME}",
                "logo": "${DOMAIN_NAME}/24Aryavrat-logo.png"
            }`}}>
        </script>

        <script type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: `{ 
                    "@context": "https://schema.org/", 
                    "@type": "WebSite", 
                    "name": "${APP_NAME}", 
                    "url": "${DOMAIN_NAME}/", 
                    "potentialAction": { 
                        "@type": "SearchAction", 
                        "target": "${DOMAIN_NAME}/search?q={search_term_string}", 
                        "query-input": "required name=search_term_string"
                    }
                }`}}>
        </script>
      </Head>
      <body>
        {/*  Google Tag Manager code for Body tag */}
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
        {/* Google Tag Manager inside Body tag End */}

        <BodySchemaMarkup  />

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
