"use client";
import StaggeredMenu from "@/components/StaggeredMenu";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "#hero" },
  { label: "About", ariaLabel: "Learn about us", link: "#about" },
  { label: "Projects", ariaLabel: "View our services", link: "#projects" },
  { label: "Team", ariaLabel: "The team behind Xperience", link: "#team" },
  { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
];

const socialItems = [
  {
    label: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61578833769304",
  },
  { label: "Instagram", link: "https://www.instagram.com/xperience.proydrs/" },
  {
    label: "Email",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=xpdigital.dev@gmail.com",
  },
];

export default function StaggerredMenu() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let checkInterval: NodeJS.Timeout | null = null;
    let scrollTimeout: NodeJS.Timeout | null = null;
    let isSetup = false;

    // Function to check if footer is visible
    const checkFooterVisibility = () => {
      const footerElement = document.getElementById("contact");
      if (!footerElement) {
        return false;
      }

      const rect = footerElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Check if footer is visible in viewport (any part of footer is visible)
      // Also check if we're near the bottom of the page as a fallback
      const isVisible = rect.top < windowHeight && rect.bottom > 0;
      const scrollPosition = window.scrollY + windowHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isNearBottom = scrollPosition >= documentHeight - 100; // Within 100px of bottom
      
      return isVisible || isNearBottom;
    };

    // Function to set up the observer
    const setupObserver = () => {
      const footerElement = document.getElementById("contact");
      if (!footerElement) {
        return false;
      }

      if (observer) {
        observer.disconnect();
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsFooterVisible(entry.isIntersecting);
          });
        },
        {
          threshold: 0.01, // Trigger when 1% of footer is visible
          rootMargin: "0px",
        }
      );

      observer.observe(footerElement);
      return true;
    };

    // Scroll handler
    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        const isVisible = checkFooterVisibility();
        setIsFooterVisible(isVisible);
      }, 16); // ~60fps
    };

    // Continuous check for footer element (handles dynamic loading)
    const startChecking = () => {
      if (isSetup) return;
      
      checkInterval = setInterval(() => {
        const footerElement = document.getElementById("contact");
        if (footerElement && !isSetup) {
          isSetup = true;
          if (checkInterval) {
            clearInterval(checkInterval);
            checkInterval = null;
          }
          setupObserver();
          // Initial visibility check
          const isVisible = checkFooterVisibility();
          setIsFooterVisible(isVisible);
        }
      }, 100);
    };

    // Initial check
    if (setupObserver()) {
      isSetup = true;
      const isVisible = checkFooterVisibility();
      setIsFooterVisible(isVisible);
    } else {
      startChecking();
    }

    // Set up scroll listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      if (observer) {
        observer.disconnect();
      }
      if (checkInterval) {
        clearInterval(checkInterval);
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="navbar h-auto fixed top-0 left-0 w-full pointer-events-none z-20">
      <div className="pointer-events-auto">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={["#B19EEF", "#5227FF"]}
          logoUrl="/Light.png"
          leftLogoUrl="/Dark.png"
          accentColor="#ff6b6b"
          isFixed={true}
          onMenuOpen={() => {}}
          onMenuClose={() => {}}
          className="relative"
          hideLogoOnMobile={isFooterVisible}
        />
      </div>
    </div>
  );
}
