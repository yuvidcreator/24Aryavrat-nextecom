import React from 'react'
import Head from 'next/head';
import { Business, DOMAIN_NAME } from '@/utils/BizSettings'


const SeoMetas = (props) => {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords} />
            <meta name="robots" content="follow, index" />
            <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta property="article:published_time" content={`${props.publishedAt}`} />
            <meta property="article:modified_time" content={`${props.updatedAt}`} />
            <link rel="canonical" href={`${DOMAIN_NAME}${props.pageslug}`} />
            <link rel="alternate" href={`${DOMAIN_NAME}${props.pageslug}`} hrefLang="en-in" />

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={Business.site_name} />
            <meta property="og:description" content={props.description} />
            <meta property="og:title" content={props.title} />
            <meta property="og:image" content={`${DOMAIN_NAME}${props.image}`} />
            <meta property="og:url" content={`${DOMAIN_NAME}${props.pageslug}`} />
            <meta property="article:publisher" content={`"https://www.facebook.com/${Business.fb_page_name}"`} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={`${DOMAIN_NAME}${props.pageslug}`} />
            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:image:src" content={`${DOMAIN_NAME}${props.image}`} />
            <meta name="twitter:site" content={Business.twitter_acc_name} />
            <meta name="twitter:creator" content={Business.twitter_acc_name} />

            <script type="application/ld+json"
            dangerouslySetInnerHTML={{
                    __html: `
                {
                "@context": "http://schema.org",
                "@type": "Webpage",
                "headline": "${props?.title}",
                "@id": "${DOMAIN_NAME}/${Business.bizNature}",
                "thumbnailUrl": "${DOMAIN_NAME}/gau-srushti-logo.png",
                "dateCreated": "${props?.publishedAt}",
                "name": "${props?.title}",
                "description": "${props.description}",
                "publisher": "${props?.author}",
                "creator": ["${props?.author}"],
                "keywords": ["${props?.keywords}"]
                }`}}></script>
        </Head>
    )
}

export default SeoMetas