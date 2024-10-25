import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();


/** @type {import('next').NextConfig} */


const nextConfig = {}

const i18nConfig = withNextIntl(nextConfig);

export default i18nConfig;
