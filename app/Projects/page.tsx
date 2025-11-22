"use client";
import ProjectCard from "@/components/ProjectCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import StaggeredMenu from "../Sections/StagerredMenu";

// Projects data - centralized and easy to maintain
const projects = [
  {
    id: "sunrise-mongolia",
    slug: "/projects/sunrise",
    title: "Sunrise Mongolia",
    shortTitleMn: "Sunrise Mongolia",
    taglineMn:
      "Аялал жуулчлалын жижигхэн мэт боловч төвөгтэй зүйлсийг шийдэж өгсөнөөрөө онцлог.",
    shortDescriptionMn:
      "Аяллын багц, маршрут, төлбөрийн мэдээлэл, мэдээллүүдээ удирдах боломжтой админ самбар болон бүтээгдэхүүн үйлчилгээгээ танилцуулах хялбар шийдэл",
    image:
      "https://res.cloudinary.com/doxmbmqjm/image/upload/v1762324102/Screenshot_2025-11-05_at_14.28.08_ndckm8.png",
    url: "https://sunrisemongolia.com",
  },
  {
    id: "win-academy",
    slug: "/projects/winacademy",
    title: "Win Academy",
    shortTitleMn: "Win Academy",
    taglineMn:
      "Орчин үед чухал болсон онлайн борлуулалтын мэдлэг, менежментийн талаарх мэдлэг олгох платформ.",
    shortDescriptionMn:
      "Онлайн сургалт,админ самбар, хичээлийн сан, төлбөрийн шийдэл, хэрэглэгчийн самбар бүхий онлайн сургалтын платформ.",
    image:
      "https://res.cloudinary.com/doxmbmqjm/image/upload/v1762324123/Screenshot_2025-11-05_at_14.28.37_voovcg.png",
    url: "https://winacademy.mn",
  },
  {
    id: "sengee",
    slug: "/projects/sengee",
    title: "Sengee.mn",
    shortTitleMn: "Sengee.mn",
    taglineMn:
      "Форексийг анхан шатнаас суриа зөв тавин амжилттай арилжаачин болох хүртэл бэлдэх онлайн сургалтын платформ.",
    shortDescriptionMn:
      "Админ самбар, хичээлийн сан, төлбөрийн шийдэл, хэрэглэгчийн самбар бүхий онлайн сургалтын платформ.",
    image:
      "https://res.cloudinary.com/dkfnybqnx/image/upload/v1763727110/Screenshot_2025-11-21_at_20.11.43_fzcjyy.png",
    url: "https://sengee.mn",
  },
  {
    id: "han-education",
    slug: "/projects/haneducation",
    title: "Han Education",
    shortTitleMn: "Han Education",
    taglineMn: "Гадаадын их сургуулийн зөвлөх үйлчилгээгээ танилцуулга сайт.",
    shortDescriptionMn:
      "Монголын оюутнуудад гадаадын их сургуулиудад элсэхэд зөвлөгөө, мэдээлэл өгдөг цогц платформ. Оюутанд зориулсан хөтөлбөрийн мэдээлэл, зөвлөгөө авах урсгал, холбогдох форм бүхий боловсролын сайт бөгөөд гадаадын их сургуулиудад элсэхэд шаардлагатай бүх мэдээлэл, зөвлөгөөг нэг дор олж авах боломжийг олгодог.",
    image:
      "https://res.cloudinary.com/doxmbmqjm/image/upload/v1762324019/Screenshot_2025-11-05_at_14.26.47_gjtbhr.png",
    url: "https://haneducation.mn",
  },

  {
    id: "new-era",
    slug: "/projects/newera",
    title: "New Era",
    shortTitleMn: "New Era сургалтын экосистем",
    taglineMn:
      "Орчин үед чухал болсон хиймэл оюун ухааныг хэрхэн өөртөө ашигтайгаар хэрэглэх талаар сургалын платформ.",
    shortDescriptionMn:
      "Админ самбар, хичээлийн сан, төлбөрийн шийдэл, хэрэглэгчийн самбар бүхий онлайн сургалтын платформ.",
    image:
      "https://res.cloudinary.com/doxmbmqjm/image/upload/v1762324000/Screenshot_2025-11-05_at_14.26.22_xwakmu.png",
    url: "https://newera.mn",
  },
];

export default function ProjectsPage() {
  return (
    <div id="projectsPage">
      <StaggeredMenu />
      <div className="min-h-screen bg-black text-white pt-20 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
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
              Бидний үйлчлүүлэгчдэд бүтээсэн дижитал шийдлүүд
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
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
