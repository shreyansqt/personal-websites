import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["@repo/components"],
};

export default withPlaiceholder(config)
