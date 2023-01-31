import { Html, Head, Main, NextScript } from 'next/document'
import AnalyticsScripts from '@/components/common/SeoComponents/AnalyticsScripts'
import BodySchemaMarkup from '@/components/common/SeoComponents/BodySchemaMarkup'
import { DOMAIN_URL, GTM_ID } from '@/utils'
import { APP_NAME, Business, DOMAIN_NAME } from '@/utils/BizSettings'

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
        <meta name='theme-color' content='#ffffff' />

        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/icons/152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/icons/180x180.png' />
        <link rel='apple-touch-icon' sizes='167x167' href='/icons/167x167.png' />

        <link rel='icon' type='image/png' sizes='32x32' href='/icons/32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/icons/16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' href='/icons/512x512.png' color='#5bbad5' />
        <link rel='shortcut icon' href='/favicon.ico' />

        {/* <!-- apple splash screen images --> */}
        <link rel='apple-touch-startup-image' href='/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png' sizes='1136x640' />
        <link rel='apple-touch-startup-image' href='/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png' sizes='640x1136' />
        <link rel='apple-touch-startup-image' href='/splash_screens/8.3__iPad_Mini_landscape.png' sizes='2266x1488' />
        <link rel='apple-touch-startup-image' href='/splash_screens/8.3__iPad_Mini_portrait.png' sizes='1488x2266' />
        <link rel='apple-touch-startup-image' href='/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png' sizes='2048x1536' />
        <link rel='apple-touch-startup-image' href='/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png' sizes='1536x2048' />
        <link rel='apple-touch-startup-image' href='/splash_screens/10.2__iPad_landscape.png' sizes='2160x1620' />
        <link rel='apple-touch-startup-image' href='/splash_screens/10.2__iPad_portrait.png' sizes='1620x2160' />
        <link rel='apple-touch-startup-image' href='/splash_screens/10.5__iPad_Air_landscape.png' sizes='2224x1668' />
        <link rel='apple-touch-startup-image' href='/splash_screens/10.5__iPad_Air_portrait.png' sizes='1668x2224' />
        <link rel='apple-touch-startup-image' href='/splash_screens/10.9__iPad_Air_landscape.png' sizes='2360x1640' />
        <link rel='apple-touch-startup-image' href='/splash_screens/10.9__iPad_Air_portrait.png' sizes='1640x2360' />
        <link rel='apple-touch-startup-image' href='/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png' sizes='2388x1668' />
        <link rel='apple-touch-startup-image' href='/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png' sizes='1668x2388' />
        <link rel='apple-touch-startup-image' href='/splash_screens/12.9__iPad_Pro_landscape.png' sizes='2732x2048' />
        <link rel='apple-touch-startup-image' href='/splash_screens/12.9__iPad_Pro_portrait.png' sizes='2048x2732' />
        <link rel='apple-touch-startup-image' href='/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png' sizes='1334x750' />
        <link rel='apple-touch-startup-image' href='/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png' sizes='750x1334' />
        <link rel='apple-touch-startup-image' href='/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png' sizes='2208x1242' />
        <link rel='apple-touch-startup-image' href='/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png' sizes='1242x2208' />
        <link rel='apple-touch-startup-image' href='/splash_screens/iPhone_11__iPhone_XR_landscape.png' sizes='1792x828' />
        <link rel='apple-touch-startup-image' href='/splash_screens/iPhone_11__iPhone_XR_portrait.png' sizes='828x1792' />
        <link rel='apple-touch-startup-image' href='/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png' sizes='2688x1242' />
        <link rel='apple-touch-startup-image' href='/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png' sizes='1242x2688' />
        <link rel='apple-touch-startup-image' href='/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png' sizes='2436x1125' />
        <link rel='apple-touch-startup-image' href='/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png' sizes='1125x2436' />
        <link rel='apple-touch-startup-image' href='/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png' sizes='2532x1170' />
        <link rel='apple-touch-startup-image' href='/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png' sizes='1170x2532' />
        <link rel='apple-touch-startup-image' href='/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png' sizes='2778x1284' />
        <link rel='apple-touch-startup-image' href='/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png' sizes='1284x2778' />
        <link rel='apple-touch-startup-image' href='/splash_screens/iPhone_14_Pro_landscape.png' sizes='2556x1179' />
        <link rel='apple-touch-startup-image' href='/splash_screens/iPhone_14_Pro_Max_landscape.png' sizes='2796x1290' />
        <link rel='apple-touch-startup-image' href='/splash_screens/iPhone_14_Pro_Max_portrait.png' sizes='1290x2796' />
        <link rel='apple-touch-startup-image' href='/splash_screens/iPhone_14_Pro_portrait.png' sizes='1179x2556' />

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
