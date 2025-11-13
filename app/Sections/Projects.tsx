"use client";
import dynamic from "next/dynamic";
import BlurText from "@/components/BlurText";
import LogoLoop from "@/components/LogoLoop";
import ShinyText from "@/components/ShinyText";
import SplitText from "@/components/SplitText";
import { ArrowRight, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Lazy load CardSwap (heavy GSAP animations)
// Card is a simple component, so we import it directly
import { Card } from "@/components/CardSwap";

const CardSwap = dynamic(() => import("@/components/CardSwap"), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-[34rem] aspect-square flex items-center justify-center">
      <div className="text-gray-400">Loading...</div>
    </div>
  ),
});

// Image sources - using Cloudinary URL for Sunrise, local imports for others
const images = {
  Sunrise:
    "https://res.cloudinary.com/doxmbmqjm/image/upload/v1762324102/Screenshot_2025-11-05_at_14.28.08_ndckm8.png",
  Win: "https://res.cloudinary.com/doxmbmqjm/image/upload/v1762324123/Screenshot_2025-11-05_at_14.28.37_voovcg.png",
  Newera:
    "https://res.cloudinary.com/doxmbmqjm/image/upload/v1762324000/Screenshot_2025-11-05_at_14.26.22_xwakmu.png",
  Hanedu:
    "https://res.cloudinary.com/doxmbmqjm/image/upload/v1762324019/Screenshot_2025-11-05_at_14.26.47_gjtbhr.png",
};
const logos = [
  {
    src: "https://winacademy.mn/images/win_logo_deault_red_bg.jpg",
    alt: "Win Academy",
    width: 56,
    height: 56,
    href: "https://winacademy.mn",
  },
  {
    src: "https://www.haneducation.mn/image-removebg-preview.png",
    alt: "Han Education",
    width: 64,
    height: 64,
    href: "https://haneducation.mn",
  },
  {
    src: "https://res.cloudinary.com/doxmbmqjm/image/upload/v1762324411/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector_wdprsk.jpg",
    alt: "Sunrise Mongolia",
    width: 64,
    height: 64,
    href: "https://sunrisemongolia.com",
  },
];

export default function Projects() {
  const router = useRouter();
  
  return (
    <div id="projects" className="w-full bg-black/20 bg-xp-bgSoft rounded-8xl px-4 sm:px-6 lg:px-10 py-12 md:py-16 mt-8">
      <div className="sections-container w-full flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden">
        {/* Text left side */}
        <section className="text-white w-full lg:w-1/2 flex flex-col justify-center px-2 sm:px-4">
          <div className="text-left mb-8 w-full">
            <SplitText
              text="Төслүүд"
              className="text-4xl sm:text-5xl font-bold text-left mb-4"
              delay={100}
              duration={0.2}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
            <BlurText
              text="Бидний хамтран ажилласан төслүүд"
              delay={50}
              animateBy="words"
              direction="bottom"
              className="text-md text-gray-300 leading-relaxed text-left text-lg"
            />
          </div>
          <LogoLoop
            logos={logos}
            speed={120}
            direction="left"
            width="100%"
            logoHeight={48}
            gap={48}
            className="brightness-50 contrast-150 grayscale hover:brightness-75 transition-all duration-300 mb-4"
          />

          {/* Buttons below logo loop */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full items-start sm:items-center justify-start">
            <button
              onClick={() => router.push("/projects")}
              className="bg-gradient-to-b from-white to-gray-100 text-gray-800 border border-gray-300 rounded-full px-6 py-3 text-base sm:text-lg font-normal cursor-pointer shadow-inner transition-all duration-300 min-w-[200px] sm:min-w-[180px] w-full sm:w-auto h-12 flex items-center justify-center gap-2 hover:bg-white relative group overflow-hidden"
            >
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-[-3px] group-hover:scale-[1.02]">
                Төслүүдийг үзэх
              </span>
              <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://calendly.com/saranochir-s/30min?hide_gdpr_banner=1&month=2025-10",
                  "_blank"
                )
              }
              className="bg-white/5 backdrop-blur-sm text-gray-400 border border-gray-400/50 rounded-full px-6 py-3 text-base sm:text-lg font-normal transition-all duration-300 min-w-[200px] sm:min-w-[180px] w-full sm:w-auto h-12 flex items-center justify-center gap-2 hover:bg-white/10 hover:text-white hover:border-gray-300 cursor-pointer relative group hover:[&_svg]:text-white overflow-hidden"
            >
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-[-3px] group-hover:scale-[1.02]">
                <ShinyText
                  text="Онлайн уулзат"
                  disabled={false}
                  speed={2}
                  className="text-gray-400 font-normal hover:text-white"
                />
              </span>
              <Calendar className="w-4 h-4 text-gray-400 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
            </button>
          </div>
        </section>
        {/* Card right side */}
        <section className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-[22rem] sm:max-w-[26rem] md:max-w-[30rem] lg:max-w-[34rem] aspect-square relative mx-auto">
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={8000}
              pauseOnHover={false}
            >
              {/* Sunrise Mongolia */}
              <Card className="overflow-hidden">
                <Image
                  src={images.Sunrise}
                  alt="Sunrise Mongolia"
                  className="w-full h-full object-contain"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </Card>
              {/* Win Academy */}
              <Card className="overflow-hidden">
                <Image
                  src={images.Win}
                  alt="Win Academy"
                  className="w-full h-full object-contain"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </Card>
              {/* New Era */}
              <Card className="overflow-hidden">
                <Image
                  src={images.Newera}
                  alt="New Era"
                  className="w-full h-full object-contain"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src={images.Hanedu}
                  alt="Han-Education"
                  className="w-full h-full object-contain"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </Card>
            </CardSwap>
          </div>
        </section>
      </div>
    </div>
  );
}
