import { ChevronDown } from "lucide-react";

export function NextSectionArrow({ className = "" }: { className?: string }) {
  return (
    <div className={`mt-10 flex justify-center ${className}`} aria-hidden="true">
      <ChevronDown className="h-6 w-6 animate-bounce text-terracotta/60" strokeWidth={2} />
    </div>
  );
}
