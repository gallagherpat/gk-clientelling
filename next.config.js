/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
      env: {
        TEST: 'This is a test'
      }
}

module.exports = nextConfig
