/** @type {import('next').NextConfig} */
const withTwin = require("./with-twin");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
};

module.exports = withTwin(nextConfig);
