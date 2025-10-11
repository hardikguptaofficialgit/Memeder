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
        {/* Skeleton while loading */}
        {!isLoaded && !isError && (
          <div className="absolute inset-0 animate-pulse bg-zinc-100" aria-hidden="true" />
        )}

        {/* Error state */}
        {isError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-zinc-500">
            <span className="text-3xl">🖼️</span>
            <p className="text-sm">Image failed to load</p>
          </div>
        )}

        {/* Actual image */}
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

      {/* Content */}
      <div className="p-4">
        {title && (
          <h3 className="text-lg font-semibold text-zinc-900 tracking-tight line-clamp-1">{title}</h3>
        )}

        {description && (
          <p className="mt-2 text-sm text-zinc-600 line-clamp-3">
            {description}
          </p>
        )}

        {/* Tags */}
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
      
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0) 100%)",
        }}
      >
        <div className="absolute top-2 right-2 flex gap-2">
          {/* Update button */}
          <button
            type="button"
            className="pointer-events-auto inline-flex items-center gap-1 rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-zinc-800 shadow-sm ring-1 ring-zinc-200 hover:bg-white"
            title="Update meme"
            onClick={(e) => e.preventDefault()}
          >
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
            </svg>
            Update
          </button>

          {/* Delete button */}
          <button
            type="button"
            className="pointer-events-auto inline-flex items-center gap-1 rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-red-600 shadow-sm ring-1 ring-red-200 hover:bg-white"
            title="Delete meme"
            onClick={(e) => e.preventDefault()}
          >
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
              <path d="M3 6h18" />
              <path d="M8 6v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
            </svg>
            Delete
          </button>
        </div>
      </div>
    </article>
  )
}
