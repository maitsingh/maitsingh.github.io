/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "**" },
    ],
  },
  // basePath: "/portfolio", // only if deploying to a subpath
};

module.exports = nextConfig;
