"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";

interface ProjectCardProps {
  id: string;
  slug: string;
  title: string;
  shortTitleMn: string;
  taglineMn: string;
  shortDescriptionMn: string;
  image: string;
  url?: string;
  index: number;
  onCardClick?: (id: string) => void;
}

export default function ProjectCard({
  id,
  slug,
  title,
  shortTitleMn,
  taglineMn,
  shortDescriptionMn,
  image,
  url,
  index,
  onCardClick,
}: ProjectCardProps) {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleClick = useCallback(() => {
    if (isNavigating) return;

    setIsNavigating(true);

    // Navigate immediately without animation
    if (slug) {
      router.push(slug);
    } else if (url && url !== "#") {
      window.open(url, "_blank");
      setIsNavigating(false);
    }

    // Call onCardClick callback if provided
    onCardClick?.(id);
  }, [isNavigating, slug, url, router, onCardClick, id]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleClick();
      }
    },
    [handleClick]
  );

  return (
    <article
      data-project-card
      role="button"
      tabIndex={0}
      aria-label={`${shortTitleMn} төслийг нээх`}
      aria-describedby={`project-${id}-description`}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 cursor-pointer"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className="aspect-video relative overflow-hidden rounded-t-2xl">
        <Image
          src={image}
          alt={shortTitleMn}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index < 2}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{shortTitleMn}</h3>
        <p className="text-gray-400 mb-2 text-sm font-medium">{taglineMn}</p>
        <p
          id={`project-${id}-description`}
          className="text-gray-500 mb-4 text-sm leading-relaxed"
        >
          {shortDescriptionMn}
        </p>
        {url && url !== "#" && (
          <div className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
            <span>Вэбсайт үзэх</span>
            <svg
              className="w-4 h-4 rotate-[-135deg]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        )}
      </div>
    </article>
  );
}
