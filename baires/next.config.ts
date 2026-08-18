import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the "X-Powered-By: Next.js" response header (minor hygiene/security best practice,
  // checked by Lighthouse "Best Practices" audits).
  poweredByHeader: false,

  async headers() {
    return [
      {
        // Static media referenced with hashed/stable filenames: cache aggressively at the
        // edge/browser. Pure performance win for repeat visits and Core Web Vitals — no
        // effect on what's rendered.
        source: "/img/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/video/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Baseline security headers site-wide — invisible to visitors, part of the
        // Lighthouse "Best Practices" score.
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
