"use client";
import Beams from "@/components/Beams";
import BlurText from "@/components/BlurText";
import ShinyText from "@/components/ShinyText";
import TextType from "@/components/TextType";
import { ArrowRight, Calendar } from "lucide-react";
export default function Hero() {
  return (
    <div className="w-full h-screen bg-black/20 flex flex-col justify-center items-center relative overflow-hidden z-10">
      <section className="beams w-full h-full absolute z-0 pointer-events-none">
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
      <div className="text-center relative z-20 pointer-events-auto">
        {/* blue text */}
        <aside className="flex flex-col items-center justify-center">
          <BlurText
            text="Xperience"
            delay={100}
            animateBy="letters"
            direction="top"
            className="text-8xl mb-8 font-bold relative z-20"
          />
          <TextType
            text={[" +5 Happy Customers", "For Your Business Growth"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="text-2xl mb-8 font-italic text-gray-400 relative z-20"
          />
        </aside>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-3 justify-center items-center z-[9999] pointer-events-auto">
          <button
            onClick={() => (window.location.href = "/projects")}
            className="bg-gradient-to-b from-white to-gray-100 text-gray-800 border border-gray-300 rounded-full px-6 py-2 text-lg font-normal shadow-inner transition-all duration-300 min-w-[160px] h-12 flex items-center justify-center gap-2 hover:bg-white cursor-pointer relative z-[9999] group overflow-hidden pointer-events-auto"
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
            className="bg-white/5 backdrop-blur-sm text-gray-400 border border-gray-400/50 rounded-full px-6 py-2 text-lg font-normal transition-all duration-300 min-w-[160px] h-12 flex items-center justify-center gap-2 hover:bg-white/10 hover:text-white hover:border-gray-300 cursor-pointer relative z-[9999] group hover:[&_svg]:text-white overflow-hidden pointer-events-auto"
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
