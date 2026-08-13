"use client";

import * as React from "react";
import { Eye } from "lucide-react";

export function VisitCounter() {
  const [count, setCount] = React.useState<number | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    fetch("/api/visits", { method: "POST" })
      .then((res) => res.json())
      .then((data: { count: number | null }) => {
        if (!cancelled) setCount(data.count);
      })
      .catch(() => {
        if (!cancelled) setCount(null);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) return null;

  return (
    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
      <Eye className="size-3.5" />
      {count.toLocaleString("es-MX")}
    </span>
  );
}
