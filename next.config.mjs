import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Tells Next.js to build a static HTML site
  images: {
    unoptimized: true,
  },
  // Since the repo is named Portfolio, we need this basePath for GitHub Pages
  basePath: "/Portfolio",
};

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);
