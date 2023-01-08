export const MEAT_ID = process.env.NEXT_PUBLIC_MEAT_ID

export const pageview = (url) => {
    window.dataLayer.push({
        event: 'pageview',
        page: url,
    })
}