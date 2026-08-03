import { ImageOff } from "lucide-react";

export function PlaceholderImage({
  label,
  className = "",
  aspect = "aspect-[4/5]",
  tone = "light",
}: {
  label: string;
  className?: string;
  aspect?: string;
  tone?: "light" | "dark";
}) {
  const toneClasses =
    tone === "dark"
      ? "border-cream/25 bg-cream/[0.06]"
      : "border-ink/15 bg-ink/[0.03]";
  const iconClasses = tone === "dark" ? "text-cream/40" : "text-ink/25";
  const labelClasses = tone === "dark" ? "text-cream/50" : "text-ink/35";

  return (
    <div
      className={`flex ${aspect} w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed p-6 text-center ${toneClasses} ${className}`}
    >
      <ImageOff className={`h-6 w-6 ${iconClasses}`} strokeWidth={1.5} />
      <p className={`text-xs font-medium uppercase tracking-wide ${labelClasses}`}>
        {label}
      </p>
    </div>
  );
}
