import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cache Components and Partial Prefetching are deliberately OFF.
  //
  // With them on, any page that reads from the database (or uses
  // cookies, headers or searchParams) fails the build unless it is
  // wrapped in <Suspense> or marked with "use cache". That is a fine
  // trade for a production team tuning performance; for a team writing
  // its first database query it is an opaque build error at exactly
  // the wrong moment.
  //
  // Turn them back on later if you want them, and read:
  // https://nextjs.org/docs/messages/blocking-prerender-dynamic
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
