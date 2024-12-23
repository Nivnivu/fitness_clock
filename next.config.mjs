/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      legacyBrowsers: true, // Enable compatibility for older browsers
      browsersListForSwc: true, // Ensure SWC transpiles for specified browser targets
    },
    swcMinify: true, // Enable faster and smaller builds
    reactStrictMode: true, // Recommended for catching potential bugs
    images: {
      domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'], // Allow your external images
    },
    webpack: (config) => {
      // Add polyfills if necessary
      config.resolve.fallback = {
        ...config.resolve.fallback,
        intl: require.resolve('intl'), // Polyfill for Intl API
      };
      return config;
    },
  };
  
  export default nextConfig;
  