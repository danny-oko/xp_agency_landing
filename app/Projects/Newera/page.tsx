"use client";
import ProjectSkeleton from "@/components/ProjectSkeleton";
import { ArrowLeft, Calendar, ExternalLink, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import StaggeredMenu from "../../Sections/StagerredMenu";

export default function NeweraPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ProjectSkeleton />;
  }

  return (
    <>
      <StaggeredMenu />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
          <Image
            src="https://res.cloudinary.com/doxmbmqjm/image/upload/v1762324000/Screenshot_2025-11-05_at_14.26.22_xwakmu.png"
            alt="New Era"
            fill
            className="object-cover blur-[2px]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Төслүүд рүү буцах</span>
              </Link>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                New Era
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Хиймэл оюун ухаан (AI)-ийн онлайн сургалтын платформ
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-sm text-gray-400 mb-1">Вэбсайт</h3>
                <a
                  href="https://edunewera.mn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors flex items-center gap-2"
                >
                  edunewera.mn
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-sm text-gray-400 mb-1">Төрөл</h3>
                <p className="text-white">Боловсрол</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm text-gray-400 mb-1">Статус</h3>
                <p className="text-white">Хөгжүүлэлт</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Төслийн тухай</h2>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                New Era нь хиймэл оюун ухаан (AI)-ийн онлайн сургалтын платформ
                бөгөөд орчин үеийн AI технологийн мэдлэг, ур чадварыг хөгжүүлэх
                зорилготой бүтээгдсэн цогц боловсролын платформ юм.
              </p>
              <p>
                Энэхүү систем нь онлайн сургалт, хичээлийн сан, төлбөрийн
                шийдэл, хэрэглэгчийн самбар зэрэг олон функцтэй бөгөөд
                суралцагчдад AI-ийн үндэс, практик хэрэглээ, мэргэжлийн ур
                чадварыг хөгжүүлэхэд тусладаг.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Онцлог функцүүд</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Админ самбар (Хичээлийн сан, төлбөрийн мэдээлэл удирдах)",
                "Төлбөрийн шийдэл",
                "Хэрэглэгчийн хэсэг",
                "Хэрэглэгчийн бүртгэл",
                // "Онлайн сургалтын систем",
                // "Ахиц дэвшлийн хяналт",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <p className="text-gray-300">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Ашигласан технологиуд</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Next.js",
                "TypeScript",
                "Tailwind",
                "MongoDB",
                "Cloudinary",
                "ReCAPTCHA",
              ].map((tech, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors text-center flex items-center justify-center"
                >
                  <p className="text-gray-300 text-sm font-medium">{tech}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Төслийн дэлгэрэнгүй</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-sm text-gray-400 mb-2">Хугацаа</h3>
                <p className="text-white text-lg font-semibold">
                  2 долоо хоног
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-sm text-gray-400 mb-2">Баг</h3>
                <p className="text-white text-lg font-semibold">2 хөгжүүлэгч</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-sm text-gray-400 mb-2">Ангилал</h3>
                <p className="text-white text-lg font-semibold">
                  Веб хөгжүүлэлт
                </p>
              </div>
            </div>
          </div>

          {/* Screenshots */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Дэлгэрэнгүй зураг</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="https://res.cloudinary.com/doxmbmqjm/image/upload/v1762324000/Screenshot_2025-11-05_at_14.26.22_xwakmu.png"
                  alt="New Era Screenshot 1"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="https://res.cloudinary.com/doxmbmqjm/image/upload/v1763778459/Screenshot_2025-11-22_at_10.27.32_jdxjr2.png"
                  alt="New Era Screenshot 2"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-12 border-t border-white/10">
            <h3 className="text-2xl font-bold mb-4">
              Таны бизнесд Вэбсайт хэрэгтэй байгаа юм биш биз?
            </h3>
            <p className="text-gray-400 mb-8">
              Вебсайт бол зүгээр нэг мөнгө үрсэн хэрэг биш харин хөрөнгө
              оруулалт юм.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/danny-otgontsetseg/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors"
              >
                Холбогдох
              </a>
              <a
                href="https://edunewera.mn"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                Вэбсайт үзэх
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
