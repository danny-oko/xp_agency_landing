"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

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
  containerRef?: React.RefObject<HTMLElement | null>;
  headerRef?: React.RefObject<HTMLElement | null>;
  otherCardsRef?: React.RefObject<HTMLElement[]>;
}

// Animation configuration constants
const ANIMATION_CONFIG = {
  // Duration in seconds - optimized for smooth, premium feel
  otherCardsFadeDuration: 0.5,
  headerFadeDuration: 0.4,
  borderRadiusDuration: 0.6,
  scaleDuration: 0.8,
  contentFadeDuration: 0.4,
  backgroundDimDuration: 0.5,
  
  // Timing (position in timeline) - staggered for natural flow
  fixedPositionTiming: 0.1,
  borderRadiusTiming: 0.1,
  scaleTiming: 0.2,
  contentFadeTiming: 0.25,
  backgroundDimTiming: 0,
  
  // Effects - enhanced for full-page expansion feel
  otherCardsBlur: 20,
  headerBlur: 8,
  otherCardsScale: 0.9,
  contentOpacity: 0.5,
  contentTranslateY: 15,
  headerTranslateY: -20,
  backgroundDimOpacity: 0.95, // Dark background to emphasize card
  
  // Viewport fill - ensure card truly fills screen
  viewportPadding: 0, // No padding, full viewport
  viewportScaleMultiplier: 1.05, // Slightly larger than viewport for edge-to-edge feel
  
  // Mobile optimizations
  mobileBlur: 12,
  mobileViewportScaleMultiplier: 1.02,
  
  // Z-index
  zIndex: 9999,
} as const;

// Check for reduced motion preference
const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Check if device is mobile
const isMobile = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
};

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
  containerRef,
  headerRef,
  otherCardsRef,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const containerOverflowRef = useRef<string | null>(null);

  // Cleanup function
  const cleanup = useCallback(() => {
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }
    
    // Reset container overflow
    if (containerRef?.current && containerOverflowRef.current !== null) {
      gsap.set(containerRef.current, { overflow: containerOverflowRef.current });
      containerOverflowRef.current = null;
    }
    
    // Clean up any overlay that might exist
    const overlay = document.querySelector('[data-card-overlay]');
    if (overlay && overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
    }
    
    // Restore body scroll
    const body = document.body;
    const html = document.documentElement;
    if (body.style.overflow) body.style.overflow = '';
    if (html.style.overflow) html.style.overflow = '';
    
    setIsAnimating(false);
  }, [containerRef]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  const handleClick = useCallback(() => {
    if (isAnimating) return;
    
    const card = cardRef.current;
    const content = contentRef.current;
    if (!card) return;

    const reducedMotion = prefersReducedMotion();
    const mobile = isMobile();
    
    // If reduced motion, skip animation and navigate immediately
    if (reducedMotion) {
      if (slug) {
        router.push(slug);
      } else if (url && url !== "#") {
        window.open(url, "_blank");
      }
      return;
    }

    setIsAnimating(true);

    // Get card position and dimensions
    const rect = card.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate scale to truly fill viewport (edge-to-edge)
    // Use the larger scale to ensure full coverage
    const scaleX = (viewportWidth - ANIMATION_CONFIG.viewportPadding * 2) / rect.width;
    const scaleY = (viewportHeight - ANIMATION_CONFIG.viewportPadding * 2) / rect.height;
    const scaleMultiplier = mobile 
      ? ANIMATION_CONFIG.mobileViewportScaleMultiplier 
      : ANIMATION_CONFIG.viewportScaleMultiplier;
    // Use max to ensure full coverage, then add multiplier for edge-to-edge feel
    const scale = Math.max(scaleX, scaleY) * scaleMultiplier;

    // Calculate center position - precise centering
    const centerX = viewportWidth / 2;
    const centerY = viewportHeight / 2;
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    const translateX = centerX - cardCenterX;
    const translateY = centerY - cardCenterY;

    // Get other cards and header
    const otherCards: HTMLElement[] = [];
    if (otherCardsRef?.current) {
      otherCards.push(...otherCardsRef.current.filter(el => el !== card));
    } else {
      // Fallback to querySelector if refs not provided
      const allCards = document.querySelectorAll('[data-project-card]');
      otherCards.push(...Array.from(allCards).filter((el) => el !== card) as HTMLElement[]);
    }

    const header = headerRef?.current || document.querySelector('[data-projects-header]') as HTMLElement;
    const container = containerRef?.current || card.closest('[data-projects-container]') as HTMLElement;
    const body = document.body;
    const html = document.documentElement;

    // Store original container overflow and set to hidden
    if (container) {
      const computedStyle = window.getComputedStyle(container);
      containerOverflowRef.current = computedStyle.overflow;
      gsap.set(container, { overflow: "hidden" });
    }

    // Create background dim overlay for premium feel
    const overlay = document.createElement('div');
    overlay.setAttribute('data-card-overlay', 'true');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0);
      z-index: ${ANIMATION_CONFIG.zIndex - 1};
      pointer-events: none;
    `;
    document.body.appendChild(overlay);

    // Set initial transform origin and z-index
    gsap.set(card, {
      transformOrigin: "center center",
      zIndex: ANIMATION_CONFIG.zIndex,
      // Ensure smooth transforms
      willChange: "transform, border-radius",
    });

    // Prevent body scroll during animation
    const originalBodyOverflow = body.style.overflow;
    const originalHtmlOverflow = html.style.overflow;
    gsap.set([body, html], { overflow: "hidden" });

    // Get blur amount based on device
    const blurAmount = mobile ? ANIMATION_CONFIG.mobileBlur : ANIMATION_CONFIG.otherCardsBlur;

    // Create timeline with cleanup on complete
    const tl = gsap.timeline({
      onComplete: () => {
        // Clean up overlay
        if (overlay.parentNode) {
          overlay.parentNode.removeChild(overlay);
        }
        
        // Restore body scroll
        body.style.overflow = originalBodyOverflow;
        html.style.overflow = originalHtmlOverflow;
        
        // Navigate after animation
        if (slug) {
          router.push(slug);
        } else if (url && url !== "#") {
          window.open(url, "_blank");
        }
        // Note: cleanup will be called on unmount, but we can reset state here
        setIsAnimating(false);
      },
      onInterrupt: () => {
        // Clean up on interrupt
        if (overlay.parentNode) {
          overlay.parentNode.removeChild(overlay);
        }
        body.style.overflow = originalBodyOverflow;
        html.style.overflow = originalHtmlOverflow;
        cleanup();
      },
    });
    
    timelineRef.current = tl;

    // Animate background dim overlay - start immediately
    tl.to(
      overlay,
      {
        background: `rgba(0, 0, 0, ${ANIMATION_CONFIG.backgroundDimOpacity})`,
        duration: ANIMATION_CONFIG.backgroundDimDuration,
        ease: "sine.inOut", // Smooth, consistent speed
      },
      ANIMATION_CONFIG.backgroundDimTiming
    );

    // Animate other cards (fade and blur) - start immediately
    if (otherCards.length > 0) {
      tl.to(
        otherCards,
        {
          opacity: 0,
          filter: `blur(${blurAmount}px)`,
          scale: ANIMATION_CONFIG.otherCardsScale,
          duration: ANIMATION_CONFIG.otherCardsFadeDuration,
          ease: "sine.inOut", // Smooth, consistent speed
        },
        0
      );
    }

    // Animate header and back button (fade out)
    if (header) {
      tl.to(
        header,
        {
          opacity: 0,
          y: ANIMATION_CONFIG.headerTranslateY,
          filter: `blur(${ANIMATION_CONFIG.headerBlur}px)`,
          duration: ANIMATION_CONFIG.headerFadeDuration,
          ease: "sine.inOut", // Smooth, consistent speed
        },
        0
      );
    }

    // Convert to fixed positioning early for smoother transition
    tl.call(() => {
      gsap.set(card, {
        position: "fixed",
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        margin: 0,
      });
      // Reset transform to maintain visual position
      gsap.set(card, { x: 0, y: 0, scale: 1 });
    }, undefined, ANIMATION_CONFIG.fixedPositionTiming);

    // Animate clicked card - border radius and scale/translate together for cohesive expansion
    // Border radius animates slightly before scale starts for natural feel
    tl.to(
      card,
      {
        borderRadius: 0,
        duration: ANIMATION_CONFIG.borderRadiusDuration,
        ease: "sine.in", // Gradually accelerates - matches main expansion feel
      },
      ANIMATION_CONFIG.borderRadiusTiming
    );

    // Scale and translate to center - this is the main expansion animation
    // Gradually accelerates from slow to fast for smooth, natural feel
    tl.to(
      card,
      {
        x: translateX,
        y: translateY,
        scale: scale,
        duration: ANIMATION_CONFIG.scaleDuration,
        ease: "sine.in", // Starts slow, gradually speeds up - smooth acceleration
      },
      ANIMATION_CONFIG.scaleTiming
    );

    // Fade out content during animation for cleaner transition
    // Content fades as card expands to feel intentional
    if (content) {
      tl.to(
        content,
        {
          opacity: ANIMATION_CONFIG.contentOpacity,
          y: ANIMATION_CONFIG.contentTranslateY,
          duration: ANIMATION_CONFIG.contentFadeDuration,
          ease: "sine.inOut", // Smooth, consistent speed
        },
        ANIMATION_CONFIG.contentFadeTiming
      );
    }

    // Call onCardClick callback if provided
    onCardClick?.(id);
  }, [isAnimating, slug, url, router, onCardClick, id, containerRef, headerRef, otherCardsRef, cleanup]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  }, [handleClick]);

  return (
    <article
      ref={cardRef}
      data-project-card
      role="button"
      tabIndex={0}
      aria-label={`${shortTitleMn} төслийг нээх`}
      aria-describedby={`project-${id}-description`}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 cursor-pointer"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={{ willChange: "transform, border-radius" }}
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
      <div ref={contentRef} className="p-6">
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

