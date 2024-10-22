// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enables React's Strict Mode for catching potential issues
    swcMinify: true,       // Enables SWC for faster builds and minification
  
    // Optional: Define environment variables
    env: {
      API_URL: process.env.API_URL || "http://localhost:3000", // Example variable
    },
  
    // Optional: Configure image optimization
    images: {
      domains: ['example.com'], // Replace with your image domains
    },
  
    // Optional: Customize Webpack configuration
    webpack: (config) => {
      // Add any custom Webpack configurations here
      return config;
    },
  };
  
  module.exports = nextConfig;