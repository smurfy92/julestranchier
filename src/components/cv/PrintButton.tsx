"use client";

import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print:hidden inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/25 transition hover:opacity-90"
      aria-label="Télécharger le CV en PDF"
    >
      <ArrowDownTrayIcon className="h-4 w-4" />
      Télécharger en PDF
    </button>
  );
}
