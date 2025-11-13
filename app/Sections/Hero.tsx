"use client";
import dynamic from "next/dynamic";
import BlurText from "@/components/BlurText";
import ShinyText from "@/components/ShinyText";
import TextType from "@/components/TextType";
import { ArrowRight, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

// Lazy load Beams (Three.js) - browser only
const Beams = dynamic(() => import("@/components/Beams"), {
  ssr: false,
  loading: () => null, // No loading state needed for background element
});

export default function Hero() {
  const router = useRouter();
  
  return (
    <div className="w-full min-h-screen bg-black/20 flex flex-col justify-center items-center relative overflow-hidden px-4 py-20 sm:px-6 lg:px-0">
      <section className="beams w-full h-full absolute pointer-events-none">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#B5B5B8"
          speed={2}
          noiseIntensity={3}
          scale={0.2}
          rotation={30}
        />
      </section>
      <div className="text-center relative pointer-events-auto max-w-5xl w-full">
        {/* blue text */}
        <aside className="flex flex-col items-center justify-center gap-6">
          <BlurText
            text="Xperience"
            delay={100}
            animateBy="letters"
            direction="top"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold relative leading-tight"
          />
          <TextType
            text={[
              " +5 Happy Customers",
              "Web Development Agency",
              "For Your Business Growth",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="text-lg sm:text-xl md:text-2xl font-italic text-gray-400 relative"
          />
        </aside>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center pointer-events-auto relative w-full sm:w-auto">
          <button
            onClick={() => router.push("/projects")}
            className="bg-gradient-to-b from-white to-gray-100 text-gray-800 border border-gray-300 rounded-full px-6 py-3 text-base sm:text-lg font-normal shadow-inner transition-all duration-300 min-w-[200px] sm:min-w-[180px] w-[60%] sm:w-auto h-12 flex items-center justify-center gap-2 hover:bg-white cursor-pointer relative group overflow-hidden pointer-events-auto"
          >
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-[-3px] group-hover:scale-[1.02] pointer-events-none">
              Бид юу бүтээдэг вэ?
            </span>
            <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110 pointer-events-none" />
          </button>
          <button
            onClick={() =>
              window.open(
                "https://calendly.com/saranochir-s/30min?hide_gdpr_banner=1&month=2025-10",
                "_blank"
              )
            }
            className="bg-white/5 backdrop-blur-sm text-gray-400 border border-gray-400/50 rounded-full px-6 py-3 text-base sm:text-lg font-normal transition-all duration-300 min-w-[200px] sm:min-w-[180px] w-[60%] sm:w-auto h-12 flex items-center justify-center gap-2 hover:bg-white/10 hover:text-white hover:border-gray-300 cursor-pointer relative group hover:[&_svg]:text-white overflow-hidden pointer-events-auto"
          >
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-[-3px] group-hover:scale-[1.02] pointer-events-none">
              <ShinyText
                text="Онлайн уулзат"
                disabled={false}
                speed={2}
                className="text-gray-400 font-normal hover:text-white"
              />
            </span>
            <Calendar className="w-4 h-4 text-gray-400 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110 pointer-events-none" />
          </button>
        </div>
      </div>

      {/* <GradualBlur
                target="parent"
                position="bottom"
                height="8rem"
                strength={3}
                divCount={5}
                curve="bezier"
                exponential={true}
                opacity={1}
            /> */}
    </div>
  );
}
