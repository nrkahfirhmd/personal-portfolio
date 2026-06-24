import Image from "next/image"
import { cn } from "@/lib/utils"

interface AvatarProps {
  src: string
  alt: string
  size?: number
  priority?: boolean
  className?: string
}

export function Avatar({
  src,
  alt,
  size = 80,
  priority = false,
  className,
}: AvatarProps) {
  return (
    <div
      className={cn("relative shrink-0 overflow-hidden rounded-full", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        className="object-cover"
        priority={priority}
      />
    </div>
  )
}
