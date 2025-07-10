import createBundleAnalyzer from '@next/bundle-analyzer'
import type { NextConfig } from 'next'

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  /* config options here */
}

export default withBundleAnalyzer(nextConfig)
