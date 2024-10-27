import createNextIntlPlugin from 'next-intl/plugin';
import withBundleAnalyzer from '@next/bundle-analyzer';
const withNextIntl = createNextIntlPlugin();

const analyze = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['icon-library'],
    },
    serverExternalPackages: ['framer-motion'],

};

const i18nConfig = withNextIntl(nextConfig);
const finalConfig = analyze(i18nConfig);

export default finalConfig;
