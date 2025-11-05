"use client";
import BlurText from "@/components/BlurText";
import CardSwap, { Card } from "@/components/CardSwap";
import LogoLoop from "@/components/LogoLoop";
import ShinyText from "@/components/ShinyText";
import SplitText from "@/components/SplitText";
import { ArrowRight, Calendar } from "lucide-react";
// import Hanedu from "@/public/projects/han.png";
// import Newera from "@/public/projects/newera.png";
// import Win from "@/public/projects/win.png";
import Image from "next/image";

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
  // {
  //     node: (
  //         // <img
  //         //     src="https://scontent.fuln4-2.fna.fbcdn.net/v/t39.30808-6/336449135_541573588108369_4625709498080177844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=5GgQR4Ih3SEQ7kNvwG27BCb&_nc_oc=AdmSGKFpGgLoPbiBfcmQpuGNsMrRauA-JJ3OpIt94-2y383gvNRvqsIMs_G6lNUu41s&_nc_zt=23&_nc_ht=scontent.fuln4-2.fna&_nc_gid=3aGivjU4BdR9C0vAR-peaA&oh=00_Aff4uuUbFSWpvBdcoEr9jA7HUZx13JDM2ldQAN9dPww9qg&oe=68E93B4F"
  //         //     alt="Amjilt"
  //         //     className="w-14 h-14 object-contain"
  //         // />
  //     ),
  //     // href: ""
  // },
  {
    node: (
      <img
        src="https://winacademy.mn/images/win_logo_deault_red_bg.jpg"
        alt="Win Academy"
        className="rounded-full w-14 h-14 object-cover"
      />
    ),
    href: "https://winacademy.mn",
  },
  {
    node: (
      <img
        src="https://www.haneducation.mn/image-removebg-preview.png"
        alt="Han Education"
        className="rounded-full w-16 h-16 object-cover"
      />
    ),
    href: "https://haneducation.mn",
  },
  {
    node: (
      <img
        src="https://res.cloudinary.com/doxmbmqjm/image/upload/v1762324411/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector_wdprsk.jpg"
        alt="Sunrise Mongolia"
        className="rounded-full w-16 h-16 object-cover"
      />
    ),
    href: "https://sunrisemongolia.com",
  },
];
export default function Projects() {
  return (
    <div className="w-full h-[90vh] bg-black/20 flex flex-col px-4 mt-8 bg-xp-bgSoft rounded-8xl">
      <div className="sections-container w-full flex-1 flex items-center justify-center overflow-hidden">
        {/* Text left side */}
        <section className="text-white text-left w-1/2 flex flex-col justify-center px-4 ml-3">
          <div className="text-left mb-8 w-full px-4 pt-8">
            <SplitText
              text="Төслүүд"
              className="text-5xl font-bold text-left mb-4"
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
          <div className="flex gap-3 mt-6 relative z-50 w-full items-start justify-start">
            <button
              onClick={() => (window.location.href = "/projects")}
              className="bg-gradient-to-b from-white to-gray-100 text-gray-800 border border-gray-300 rounded-full px-6 py-2 text-lg font-normal cursor-pointer shadow-inner transition-all duration-300 min-w-[160px] h-12 flex items-center justify-center gap-2 hover:bg-white relative z-50 group overflow-hidden"
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
              className="bg-white/5 backdrop-blur-sm text-gray-400 border border-gray-400/50 rounded-full px-6 py-2 text-lg font-normal transition-all duration-300 min-w-[160px] h-12 flex items-center justify-center gap-2 hover:bg-white/10 hover:text-white hover:border-gray-300 cursor-pointer relative z-50 group hover:[&_svg]:text-white overflow-hidden"
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
        <section className="w-1/2 flex items-center justify-center">
          <div className="w-full max-w-[600px] h-[600px] max-h-[80vh] aspect-square relative">
            <CardSwap
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners"
              logos={logos}
              speed={10}
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
                  className="w-full h-full object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </Card>
              {/* Win Academy */}
              <Card className="overflow-hidden">
                <Image
                  src={images.Win}
                  alt="Win Academy"
                  className="w-full h-full object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </Card>
              {/* New Era Platform */}
              <Card className="overflow-hidden">
                <Image
                  src={images.Newera}
                  alt="New Era Platform"
                  className="w-full h-full object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src={images.Hanedu}
                  alt="Han-Education"
                  className="w-full h-full object-cover"
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
