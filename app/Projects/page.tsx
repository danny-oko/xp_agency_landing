"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import dynamic from "next/dynamic";
import StaggeredMenu from "../Sections/StagerredMenu";
import ProjectCard from "@/components/ProjectCard";

// Projects data - centralized and easy to maintain
const projects = [
  {
    id: "sunrise-mongolia",
    slug: "/projects/Sunrise",
    title: "Sunrise Mongolia",
    shortTitleMn: "Sunrise Mongolia аялал",
    taglineMn: "Аялал жуулчлалын туршлагыг дараагийн шатанд гаргасан платформ.",
    shortDescriptionMn:
      "Аяллын багц, аяллын маршрут, төлбөрийн урсгалыг нэг дор төвлөрүүлсэн аялал жуулчлалын вэб платформ.",
    image:
      "https://res.cloudinary.com/doxmbmqjm/image/upload/v1762324102/Screenshot_2025-11-05_at_14.28.08_ndckm8.png",
    url: "https://sunrisemongolia.com",
  },
  {
    id: "win-academy",
    slug: "/projects/Winacademy",
    title: "Win Academy",
    shortTitleMn: "Win Academy санхүүгийн боловсрол",
    taglineMn: "Трейдинг, санхүүгийн боловсролыг цахимаар хүргэдэг академийн систем.",
    shortDescriptionMn:
      "Онлайн сургалт, хичээлийн сан, төлбөрийн интеграц, хэрэглэгчийн самбар бүхий боловсролын платформ.",
    image:
      "https://res.cloudinary.com/doxmbmqjm/image/upload/v1762324123/Screenshot_2025-11-05_at_14.28.37_voovcg.png",
    url: "https://winacademy.mn",
  },
  {
    id: "han-education",
    slug: "/projects/Haneducation",
    title: "Han Education",
    shortTitleMn: "Han Education гадаадад сурцгаая",
    taglineMn: "Гадаадын их сургуулийн зөвлөх үйлчилгээний платформ.",
    shortDescriptionMn:
      "Оюутанд зориулсан хөтөлбөрийн мэдээлэл, зөвлөгөө авах урсгал, холбогдох форм бүхий боловсролын сайт.",
    image:
      "https://res.cloudinary.com/doxmbmqjm/image/upload/v1762324019/Screenshot_2025-11-05_at_14.26.47_gjtbhr.png",
    url: "https://haneducation.mn",
  },
  {
    id: "new-era",
    slug: "/projects/Newera",
    title: "New Era",
    shortTitleMn: "New Era сургалтын экосистем",
    taglineMn: "K–12 болон нэмэлт сургалтын нэгдсэн систем.",
    shortDescriptionMn:
      "Сурагч, эцэг эх, багш нарт зориулсан хөтөлбөр, хичээл, мэдэгдэл, цахим сургалтын платформ.",
    image:
      "https://res.cloudinary.com/doxmbmqjm/image/upload/v1762324000/Screenshot_2025-11-05_at_14.26.22_xwakmu.png",
    url: "#",
  },
];

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <StaggeredMenu />
      <div className="min-h-screen bg-black text-white pt-20 pb-16 relative overflow-hidden">
        <div 
          ref={containerRef}
          data-projects-container 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Header */}
          <div ref={headerRef} data-projects-header className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Нүүр хуудас руу буцах</span>
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Бидний төслүүд
            </h1>
            <p className="text-lg text-gray-400">
              Бидний үйлчлүүлэгчдэд бүтээсэн дижитал шийдлүүдийг судлаарай
            </p>
          </div>

          {/* Projects Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            role="list"
            aria-label="Төслүүдийн жагсаалт"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                {...project}
                index={index}
                containerRef={containerRef}
                headerRef={headerRef}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
