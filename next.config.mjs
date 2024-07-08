import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    emotion: true,
  },
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
};

export default bundleAnalyzer(nextConfig);
