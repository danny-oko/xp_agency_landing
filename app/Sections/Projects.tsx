"use client";
import ShinyText from "@/components/ShinyText";
import SplitText from "@/components/SplitText";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const featuredProjects = [
  {
    title: "Sunrise Mongolia",
    description:
      "Аяллын багц, маршрут, төлбөрийн мэдээлэл, мэдээллүүдээ удирдах боломжтой админ самбар болон бүтээгдэхүүн үйлчилгээгээ танилцуулах хялбар шийдэл",
    image:
      "https://res.cloudinary.com/doxmbmqjm/image/upload/v1762324102/Screenshot_2025-11-05_at_14.28.08_ndckm8.png",
    href: "/Projects/Sunrise",
  },
  {
    title: "Win Academy",
    description:
      "Онлайн сургалт,админ самбар, хичээлийн сан, төлбөрийн шийдэл, хэрэглэгчийн самбар бүхий онлайн сургалтын платформ.",
    image:
      "https://res.cloudinary.com/doxmbmqjm/image/upload/v1762324123/Screenshot_2025-11-05_at_14.28.37_voovcg.png",
    href: "/Projects/Winacademy",
  },
  {
    title: "New Era",
    description:
      "Админ самбар, хичээлийн сан, төлбөрийн шийдэл, хэрэглэгчийн самбар бүхий онлайн сургалтын платформ.",
    image:
      "https://res.cloudinary.com/doxmbmqjm/image/upload/v1762324000/Screenshot_2025-11-05_at_14.26.22_xwakmu.png",
    href: "/Projects/Newera",
  },
  {
    title: "Han Education",
    description:
      "Монголын оюутнуудад гадаадын их сургуулиудад элсэхэд зөвлөгөө, мэдээлэл өгдөг цогц платформ. Оюутанд зориулсан хөтөлбөрийн мэдээлэл, зөвлөгөө авах урсгал, холбогдох форм бүхий боловсролын сайт бөгөөд гадаадын их сургуулиудад элсэхэд шаардлагатай бүх мэдээлэл, зөвлөгөөг нэг дор олж авах боломжийг олгодог.",
    image:
      "https://res.cloudinary.com/doxmbmqjm/image/upload/v1762324019/Screenshot_2025-11-05_at_14.26.47_gjtbhr.png",
    href: "/Projects/Haneducation",
  },
];

export default function Projects() {
  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="projects"
      className="mx-auto flex w-full flex-col gap-6 rounded-[2rem] bg-xp-bgSoft px-4 py-8 sm:w-[90%] sm:px-6 sm:py-10 md:w-[75%]  lg:px-10"
    >
      <div className="flex flex-col gap-6 text-white">
        <div className="text-center lg:text-left">
          <h2 className="sr-only">Төслүүд</h2>
          <SplitText
            text="Төслүүд"
            className="mb-4 text-4xl font-bold sm:text-5xl"
            delay={100}
            duration={0.2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-lg shadow-black/20">
          <div className="relative aspect-[16/9] w-full max-h-[360px] sm:max-h-[420px]">
            {featuredProjects.map((project, index) => (
              <Link
                key={`slide-${project.title}`}
                href={project.href}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeSlide === index
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="mb-1 text-lg font-semibold text-white sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="line-clamp-2 max-w-[65ch] text-sm text-gray-200">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() =>
              setActiveSlide(
                (prev) =>
                  (prev - 1 + featuredProjects.length) % featuredProjects.length
              )
            }
            className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() =>
              setActiveSlide((prev) => (prev + 1) % featuredProjects.length)
            }
            className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {featuredProjects.map((project, index) => (
              <button
                key={`dot-${project.title}`}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  activeSlide === index
                    ? "w-6 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/70"
                }`}
                aria-label={project.title}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-stretch justify-center gap-3 pt-2 sm:flex-row sm:items-center sm:justify-start">
          <button
            onClick={() => router.push("/Projects")}
            className="group inline-flex h-12 min-h-[44px] w-full items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 text-base font-medium text-gray-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100 active:translate-y-0 active:scale-[0.99] sm:w-auto sm:min-w-[190px]"
          >
            <span className="whitespace-nowrap transition-transform duration-200 group-hover:-translate-x-0.5">
              Төслүүдийг үзэх
            </span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={() =>
              window.open(
                "https://calendly.com/danny-otgontsetseg/15min",
                "_blank"
              )
            }
            className="group inline-flex h-12 min-h-[44px] w-full items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-6 text-base font-medium text-gray-300 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 hover:text-white active:translate-y-0 active:scale-[0.99] sm:w-auto sm:min-w-[190px]"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
              <ShinyText
                text="Онлайн уулзат"
                disabled={false}
                speed={2}
                className="font-medium text-gray-300 group-hover:text-white"
              />
            </span>
            <Calendar className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
