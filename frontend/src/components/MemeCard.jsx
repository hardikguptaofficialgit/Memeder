import { useState } from "react"
import { cn } from "../lib/utils"

export default function MemeCard({ meme, fit = "cover" }) {
  const { title, imageUrl, description, tags = [] } = meme || {}
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)

  return (
    <article
      className={cn(
        "group relative w-full max-w-sm select-none",
        "bg-white rounded-xl shadow-sm border border-zinc-200",
        "transition-transform duration-200 will-change-transform",
        "hover:shadow-md hover:-translate-y-0.5"
      )}
      role="region"
      aria-label={title || "Meme card"}
    >
      <div
        className="relative w-full overflow-hidden rounded-t-xl bg-zinc-50"
        style={{ aspectRatio: "4 / 5" }}
      >
        {!isLoaded && !isError && (
          <div className="absolute inset-0 animate-pulse bg-zinc-100" aria-hidden="true" />
        )}
        {isError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-zinc-500">
            <span className="text-3xl">🖼️</span>
            <p className="text-sm">Image failed to load</p>
          </div>
        )}
        {!isError && (
          <img
            src={imageUrl}
            alt={title || "Meme image"}
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsError(true)}
            className={cn(
              "h-full w-full transition-opacity duration-300 object-center",
              fit === "contain" ? "object-contain" : "object-cover",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
            draggable={false}
          />
        )}
      </div>
      <div className="p-4">
        {title && (
          <h3 className="text-lg font-semibold text-zinc-900 tracking-tight line-clamp-1">{title}</h3>
        )}

        {description && (
          <p className="mt-2 text-sm text-zinc-600 line-clamp-3">
            {description}
          </p>
        )}
        {Array.isArray(tags) && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 border border-zinc-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0) 100%)",
        }}
      />
    </article>
  )
}
