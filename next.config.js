/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports= {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.freeiconspng.com',
        port: '',
        pathname: '/account123/**'
      },
    ]
  },
}

module.exports = nextConfig