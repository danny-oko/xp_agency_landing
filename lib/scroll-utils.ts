/**
 * Scrolls to a section on the page smoothly
 * @param id - The ID of the section to scroll to (without #)
 */
export function scrollToSection(id: string) {
  if (typeof window === "undefined") return;
  
  const section = document.getElementById(id);
  if (!section) {
    // Silently fail - section may not exist yet or may not be on current page
    return;
  }
  
  // Get the offset to account for fixed header if needed
  const headerOffset = 0; // Adjust if you have a fixed header
  const elementPosition = section.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

