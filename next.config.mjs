import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Tells Next.js to build a static HTML site
  // Add this if you ever use the <Image /> component from next/image
  images: {
    unoptimized: true,
  },
  // If your repo is named "my-portfolio" and it's NOT a username.github.io repo,
  // you will also need to add a basePath:
  // basePath: "/my-portfolio", 
};

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);
