"use client";
import ShinyText from "@/components/ShinyText";
import SplitText from "@/components/SplitText";
import { ArrowRight, Calendar } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [cardDistance, setCardDistance] = useState(40);
  const [verticalDistance, setVerticalDistance] = useState(50);

  useEffect(() => {
    const updateDistances = () => {
      if (window.innerWidth >= 1024) {
        setCardDistance(60);
        setVerticalDistance(70);
      } else if (window.innerWidth >= 768) {
        setCardDistance(50);
        setVerticalDistance(60);
      } else {
        setCardDistance(40);
        setVerticalDistance(50);
      }
    };

    updateDistances();
    window.addEventListener("resize", updateDistances);
    return () => window.removeEventListener("resize", updateDistances);
  }, []);

  return (
    <div
      id="projects"
      className="w-full sm:w-[90%] md:w-[80%] mx-auto bg-black/20 bg-xp-bgSoft rounded-8xl px-4 sm:px-6 lg:px-10 py-8 md:py-12 lg:py-16 mt-12 sm:mt-8 min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] lg:min-h-[70vh] h-auto flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="sections-container w-[100%] flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-12 overflow-hidden">
        {/* Text and Buttons Section - Left side on desktop, above on mobile */}
        <section className="text-white w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-2 sm:px-4 order-1 lg:order-1">
          <div className="text-center lg:text-left mb-6 w-full">
            <SplitText
              text="Төслсүүд"
              className="text-4xl sm:text-5xl font-bold text-center lg:text-left mb-4"
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
            {/* <BlurText
              text="Хамтран ажилласан байгууллагууд:"
              delay={60}
              animateBy="words"
              direction="bottom"
              className="text-md text-gray-300 leading-relaxed text-left text-lg"
            /> */}
          </div>
          {/* <LogoLoop
            logos={logos}
            speed={120}
            direction="left"
            width="100%"
            logoHeight={48}
            gap={48}
            className="brightness-50 contrast-150 grayscale hover:brightness-75 transition-all duration-300 mb-4"
          /> */}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full items-center lg:items-start justify-center lg:justify-start">
            <button
              onClick={() => router.push("/Projects")}
              className="bg-gradient-to-b from-white to-gray-100 text-gray-800 border border-gray-300 rounded-full px-6 py-3 text-base sm:text-lg font-normal cursor-pointer shadow-inner transition-all duration-300 min-w-[200px] sm:min-w-[180px] w-full sm:w-auto h-12 flex items-center justify-center gap-2 hover:bg-white relative group overflow-hidden"
            >
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-[-3px] group-hover:scale-[1.02] whitespace-nowrap">
                Төслүүдийг үзэх
              </span>
              <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://calendly.com/danny-otgontsetseg/15min",
                  "_blank"
                )
              }
              className="bg-white/5 backdrop-blur-sm text-gray-400 border border-gray-400/50 rounded-full px-6 py-3 text-base sm:text-lg font-normal transition-all duration-300 min-w-[200px] sm:min-w-[180px] w-full sm:w-auto h-12 flex items-center justify-center gap-2 hover:bg-white/10 hover:text-white hover:border-gray-300 cursor-pointer relative group hover:[&_svg]:text-white overflow-hidden"
            >
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-[-3px] group-hover:scale-[1.02] whitespace-nowrap">
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

        {/* CardSwap Section - Right side on desktop, below on mobile */}
        <section className="flex w-full lg:w-1/2 items-center justify-center order-2 lg:order-2 overflow-hidden px-2 sm:px-4">
          <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[480px] aspect-square relative mx-auto overflow-hidden">
            <style
              dangerouslySetInnerHTML={{
                __html: `
              #projects .card-swap-center-wrapper {
                position: relative !important;
                width: 100% !important;
                height: 100% !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
              }
              #projects .card-swap-center-wrapper > * {
                position: absolute !important;
                bottom: auto !important;
                right: auto !important;
                top: 50% !important;
                left: 50% !important;
                transform: translate(-50%, -50%) !important;
                transform-origin: center center !important;
                margin: 0 !important;
              }
              #projects .card-swap-center-wrapper > div[class*="absolute"],
              #projects .card-swap-center-wrapper > div[class*="bottom-0"],
              #projects .card-swap-center-wrapper > div[class*="right-0"] {
                bottom: auto !important;
                right: auto !important;
                top: 50% !important;
                left: 50% !important;
                transform: translate(-50%, -50%) !important;
                transform-origin: center center !important;
              }
              @media (max-width: 768px) {
                #projects .card-swap-center-wrapper > *,
                #projects .card-swap-center-wrapper > div[class*="absolute"],
                #projects .card-swap-center-wrapper > div[class*="bottom-0"],
                #projects .card-swap-center-wrapper > div[class*="right-0"] {
                  transform: translate(-50%, -50%) scale(0.75) !important;
                }
              }
              @media (max-width: 480px) {
                #projects .card-swap-center-wrapper > *,
                #projects .card-swap-center-wrapper > div[class*="absolute"],
                #projects .card-swap-center-wrapper > div[class*="bottom-0"],
                #projects .card-swap-center-wrapper > div[class*="right-0"] {
                  transform: translate(-50%, -50%) scale(0.55) !important;
                }
              }
            `,
              }}
            />
            <div className="card-swap-center-wrapper w-full h-full">
              <CardSwap
                cardDistance={cardDistance}
                verticalDistance={verticalDistance}
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
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 480px"
                  />
                </Card>
                {/* Win Academy */}
                <Card className="overflow-hidden">
                  <Image
                    src={images.Win}
                    alt="Win Academy"
                    className="w-full h-full object-contain"
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 480px"
                  />
                </Card>
                {/* New Era */}
                <Card className="overflow-hidden">
                  <Image
                    src={images.Newera}
                    alt="New Era"
                    className="w-full h-full object-contain"
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 480px"
                  />
                </Card>
                <Card className="overflow-hidden">
                  <Image
                    src={images.Hanedu}
                    alt="Han-Education"
                    className="w-full h-full object-contain"
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 480px"
                  />
                </Card>
              </CardSwap>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
