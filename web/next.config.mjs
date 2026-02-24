/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    output: 'export',
    basePath: isProd ? '/Pablo-Daniel' : '',
    assetPrefix: isProd ? '/Pablo-Daniel/' : '',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
