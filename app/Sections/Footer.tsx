"use client";
import Logo from "@/public/Dark.png";
import { Facebook, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { scrollToSection } from "@/lib/scroll-utils";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's an external link or email, let it work normally
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return;
    }

    e.preventDefault();
    const isHomePage = pathname === "/";
    const sectionId = href.substring(1); // Remove the #

    // If not on home page, navigate to home with hash
    if (!isHomePage) {
      router.push(`/#${sectionId}`);
      return;
    }

    // On home page, scroll to section
    scrollToSection(sectionId);
  };

  return (
    <footer id="contact" className="w-full bg-xp-bgSoft text-white relative">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        {/* Top Row */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Left Section - Logo & Contact */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <div className="relative h-10 w-28 shrink-0 flex items-baseline">
                <div className="relative w-full h-full flex items-start">
                  <Image
                    src={Logo}
                    alt="Xperience Agency Logo"
                    fill
                    className="object-contain object-left-bottom"
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="space-y-1 text-sm text-gray-300">
                  <p className="font-medium text-white">Xperience Agency</p>
                  <p className="mt-1">
                    Tel: <span className="text-white">80296007</span>
                  </p>
                  <p className="mt-1">
                    Mail:{" "}
                    <a
                      href="mailto:dnioko0412@gmail.com."
                      className="hover:underline"
                    >
                      dnioko0412@gmail.com
                    </a>
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-3 relative">
                  <a
                    href="https://www.facebook.com/profile.php?id=61578833769304"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition cursor-pointer relative pointer-events-auto"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="https://www.instagram.com/xperience.proydrs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition cursor-pointer relative pointer-events-auto"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=xpdigital.dev@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition cursor-pointer relative pointer-events-auto"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section - Navigation (Vertical) */}
          <nav className="flex flex-col text-sm md:text-base">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Navigation
            </span>
            <div className="mt-4 flex flex-col gap-3">
              {[
                { href: "#hero", label: "Home" },
                { href: "#team", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#team", label: "Our Team" },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="text-gray-300 hover:text-white transition cursor-pointer"
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>

          {/* Right Section - Address (Left Aligned) */}
          <div className="flex flex-col text-sm text-gray-300 text-start">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Location
            </span>
            <div className="mt-4 space-y-2">
              <p className="font-medium text-white">Ulaanbaatar, Mongolia</p>
              <p>Building better web Xperiences.</p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-400">
            © 2025 Xperience Agency. All rights reserved.
          </p>

          <div className="flex items-center gap-4 relative">
            <a
              href="https://www.facebook.com/profile.php?id=61578833769304"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition cursor-pointer relative pointer-events-auto"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/xperience.proydrs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition cursor-pointer relative pointer-events-auto"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=xpdigital.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition cursor-pointer relative pointer-events-auto"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
