/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/components"],
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-images-1.medium.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        port: '',
      },
    ],
  },
};
