import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  }
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
