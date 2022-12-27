/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
  webpack: (config) => {
    const path = require('path');
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
});

module.exports = nextConfig;
