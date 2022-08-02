/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/today',
        destination: 'https://zenquotes.io/api/today',
      },
    ]
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  exportPathMap: async function (
      defaultPathMap,
      {dev, dir, outDir, distDir, buildId}
  ) {
    return {
      '/': {page: '/'}
    }
  },
}

module.exports = nextConfig
