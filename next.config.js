/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  scope: '/',
  sw: 'sw.js',
  disable: false,
  register: true,
  skipWaiting: true,
  fallbacks: {
    image: '/24Aryavrat-logo.png',
    // document: '/other-offline',  // if you want to fallback to a custom page other than /_offline
    // font: '/static/font/fallback.woff2',
    // audio: ...,
    // video: ...,
  },
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
  // runtimeCaching,
})

const nextConfig = withPWA({
  env: {
    BASE_URL: process.env.SITE_URL,
    BACKEND_BASE_URL: process.env.BACKEND_URL,
    API_URL: process.env.BACKEND_API,
  },
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false, // disable powered by header.
  trailingSlash: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com', 'dummyimage.com','cdn.tailgrids.com', 'fancytailwind.com'],
  },
  output: 'standalone',
})

module.exports = nextConfig
