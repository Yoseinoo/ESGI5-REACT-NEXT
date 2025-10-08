import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.openfoodfacts.org', // add the OpenFoodFacts domain
      'static.openfoodfacts.org', // some URLs may come from here
    ],
  },
};

export default nextConfig;
