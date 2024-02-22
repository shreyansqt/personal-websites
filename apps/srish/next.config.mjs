import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["@repo/common"],
};

export default withPlaiceholder(config)
