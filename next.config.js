/** @type {import('next').NextConfig} */
const nextConfig = {
  withTM:require('next-transpile-modules')([]),
  reactStrictMode: false,
  images: {
    domains: ['avatars.githubusercontent.com', 'stocks.valyoux.io','images.unsplash.com'],
  },
  staticPageGenerationTimeout: 10000
}
const withTM = require('next-transpile-modules')([]);

module.exports = nextConfig;
