"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Se remonta en cada cambio de ruta (a diferencia de layout.tsx), lo que da
 * un fade+slide sutil entre páginas sin tocar cada page.tsx individual.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
