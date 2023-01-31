import { GTM_ID } from "@/utils"





const AnalyticsScripts = () => {
    return (
        <>
            {/*  Google Tag Manager */}
            <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}}></script>
            {/* End Google Tag Manager */}

            {/* Meta Pixel Code */}
            {/* <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');fbq('init', '${MEAT_ID}');fbq('track', 'PageView');`}}></script>
            <noscript dangerouslySetInnerHTML={{ __html:`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${MEAT_ID}&ev=PageView&noscript=1"`}}></noscript> */}
            {/* End Meta Pixel Code */}
        </>
    )
}

export default AnalyticsScripts