"use client"
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Hero from './Sections/Hero'
import StaggeredMenu from './Sections/StagerredMenu'
import Values from './Sections/Values'
import Projects from './Sections/Projects'
import { scrollToSection } from '@/lib/scroll-utils'

// Lazy load below-the-fold sections
const Team = dynamic(() => import('./Sections/Team'), {
  ssr: true,
  loading: () => (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="text-gray-400">Loading...</div>
    </div>
  ),
});

const Footer = dynamic(() => import('./Sections/Footer'), {
  ssr: true,
  loading: () => (
    <div className="w-full py-12 flex items-center justify-center">
      <div className="text-gray-400">Loading...</div>
    </div>
  ),
});

export default function Home() {
  // Handle hash navigation on page load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1); // Remove the #
        let retryCount = 0;
        const maxRetries = 20; // Maximum 1 second of retries (20 * 50ms)
        
        // Wait for the element to exist before scrolling
        const scrollToElement = () => {
          const element = document.getElementById(sectionId);
          if (element) {
            scrollToSection(sectionId);
          } else if (retryCount < maxRetries) {
            // Retry after a short delay if element not found
            retryCount++;
            setTimeout(scrollToElement, 50);
          }
        };
        
        // Start scrolling after a brief delay to allow page to render
        const timer = setTimeout(scrollToElement, 100);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <>
      <StaggeredMenu />
      <Hero />
      <Values />
      <Projects />
      <Team />
      <Footer /> 
    </>
  )
}
