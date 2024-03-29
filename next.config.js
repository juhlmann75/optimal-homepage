/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/today',
        destination: 'https://zenquotes.io/api/today'
      }
    ]
  },
  images: {
    loader: 'akamai',
    path: '',
  }
}

module.exports = nextConfig
