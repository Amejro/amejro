/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Twitter Profile Picture
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",

        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",

        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
// prod-files-secure.s3.us-west-2.amazonaws.com
