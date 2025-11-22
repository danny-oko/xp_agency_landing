"use client";
import { ArrowLeft, Calendar, ExternalLink, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import StaggeredMenu from "../../Sections/StagerredMenu";

export default function SunrisePage() {
  return (
    <>
      <StaggeredMenu />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
          <Image
            src="https://res.cloudinary.com/doxmbmqjm/image/upload/v1762324102/Screenshot_2025-11-05_at_14.28.08_ndckm8.png"
            alt="Sunrise Mongolia"
            fill
            className="object-cover blur-sm opacity-60"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12">
              <Link
                href="/Projects"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Төслүүд рүү буцах</span>
              </Link>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                Sunrise Mongolia
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Монгол орны шилдэг аялалуудыг танилцуулахын сацуу, өөрсдийн
                үйлчилгээгээ танилцуулах вебсайт.
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
                  href="https://sunrisemongolia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors flex items-center gap-2"
                >
                  sunrisemongolia.com
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
                <p className="text-white">Аялал жуулчлал</p>
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm text-gray-400 mb-1">Статус</h3>
                <p className="text-white">Ажиллаж байна</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Төслийн тухай</h2>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                Sunrise Mongolia нь Монгол орны хамгийн сайхан аялал, адал
                явдлуудыг танилцуулах зорилготой аялал жуулчлалын платформ юм.
              </p>
              <p>
                Энэхүү платформ нь аялагчдад аялалын хөтөлбөрийн талаархи
                дэлгэрэнгүй мэдээлэл, нэмэлт мэдээлэл зэрэг найдвартай
                хэрэглэгчийн туршлагыг бүрдүүлж өгсөн.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Онцлог функцүүд</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Админ самбар ( Шинэ мэдээлэл, үйлчилгээгээ танилцуулах )",
                "Аяллын багцуудан талаарх тодорхой бас цэгтэй мэдээллүүд",
                "FAQ ( Аялалын талаарх загварласан асуулт хариулт )",
                "Мэдээлэл, зөвлөгөөний блог",
                // "Хэрэглэгчийн самбар",
                // "Аяллын үлдэгдэл хэсэг",
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
                  src="https://res.cloudinary.com/doxmbmqjm/image/upload/v1762324102/Screenshot_2025-11-05_at_14.28.08_ndckm8.png"
                  alt="Sunrise Mongolia Screenshot 1"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="https://res.cloudinary.com/doxmbmqjm/image/upload/v1763775843/Screenshot_2025-11-22_at_09.43.45_rqqffs.png"
                  alt="Sunrise Mongolia Screenshot 2"
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
                href="https://sunrisemongolia.com"
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
