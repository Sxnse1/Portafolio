import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Los placeholders de proyectos son SVG locales generados por nosotros (contenido confiable).
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
