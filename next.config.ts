import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 

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