/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['ams3.digitaloceanspaces.com'], formats: ['image/webp', 'image/avif'], }
}

module.exports = nextConfig
