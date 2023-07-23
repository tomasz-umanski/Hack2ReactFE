/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')(
  'src/messages/i18n.ts'
);

const nextConfig = {
  distDir: "dist",
  reactStrictMode: true
};

module.exports = withNextIntl(nextConfig);
