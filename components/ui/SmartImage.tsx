import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function SmartImage({
  src,
  alt,
  label,
  className = "",
  aspect = "aspect-[4/5]",
  tone = "light",
  priority = false,
  fit = "cover",
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  aspect?: string;
  tone?: "light" | "dark";
  priority?: boolean;
  fit?: "cover" | "contain";
}) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", src));

  if (!exists) {
    return (
      <PlaceholderImage
        label={label}
        className={className}
        aspect={aspect}
        tone={tone}
      />
    );
  }

  return (
    <div className={`relative ${aspect} w-full overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={encodeURI(`/${src}`)}
        alt={alt}
        fill
        priority={priority}
        className={fit === "contain" ? "object-contain" : "object-cover"}
        sizes="(max-width: 640px) 90vw, 480px"
      />
    </div>
  );
}
