"use client";
import Logo from "@/public/Dark.png";
import { Facebook, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-xp-bgSoft text-white relative z-10">
      <div className="w-4/5 mx-auto px-6 py-12">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Left Section - Logo & Contact */}
          <div className="flex flex-col md:flex-row items-start md:items-baseline gap-6">
            <div className="relative h-10 w-28 shrink-0">
              <Image
                src={Logo}
                alt="XP Digital Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="space-y-1 text-sm text-gray-300">
                <p>
                  Tel: <span className="text-white">80296007</span>
                </p>
                <p>
                  Mail:{" "}
                  <a
                    href="mailto:xpdigital.dev@gmail.com"
                    className="hover:underline"
                  >
                    xpdigital.dev@gmail.com
                  </a>
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 relative z-10">
                <a
                  href="https://www.facebook.com/profile.php?id=61578833769304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition cursor-pointer relative z-10 pointer-events-auto"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com/xperience.proydrs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition cursor-pointer relative z-10 pointer-events-auto"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=xpdigital.dev@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition cursor-pointer relative z-10 pointer-events-auto"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Middle Section - Navigation (Vertical) */}
          <nav className="w-full md:w-auto">
            <div className="flex flex-col gap-3 text-sm md:text-base">
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-gray-300 hover:text-white transition"
              >
                Projects
              </Link>
              <Link
                href="/team"
                className="text-gray-300 hover:text-white transition"
              >
                Our Team
              </Link>
            </div>
          </nav>

          {/* Right Section - Address (Left Aligned) */}
          <div className="text-sm text-gray-300 text-start self-start">
            <p className="font-medium text-white">Xperience Agency</p>
            <p className="mt-1">Ulaanbaatar, Mongolia</p>
            <p className="mt-1">Building better web experiences.</p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © 2025 Xperience Agency. All rights reserved.
          </p>

          <div className="flex items-center gap-3 relative z-10">
            <a
              href="https://www.facebook.com/profile.php?id=61578833769304"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition cursor-pointer relative z-10 pointer-events-auto"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/xperience.proydrs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition cursor-pointer relative z-10 pointer-events-auto"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=xpdigital.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition cursor-pointer relative z-10 pointer-events-auto"
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
