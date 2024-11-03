/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
        optimisticClientCache: false,
    }
};

export default nextConfig;
