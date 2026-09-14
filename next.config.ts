import { NextConfig } from 'next'
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'
import createNextIntlPlugin from 'next-intl/plugin'

initOpenNextCloudflareForDev()

const nextConfig = {
  webpack(config: NextConfig) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  }
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
