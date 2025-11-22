"use client";

import BlurText from "@/components/BlurText";
import ClickSpark from "@/components/ClickSpark";
import GradientText from "@/components/GradientText";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";

export default function Call() {
  return (
    <div
      id="call"
      className="w-[80%] mx-auto min-h-[85vh] flex flex-col justify-center items-center bg-xp-bgSoft rounded-8xl p-8 sm:p-12 md:p-16 py-12 sm:py-16 md:py-20 mt-12 sm:mt-8"
    >
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Header Section */}
        <div className="headline w-full flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16">
          <GradientText
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6"
            colors={["#A855F7", "#38BDF8", "#14B8A6", "#38BDF8", "#A855F7"]}
            animationSpeed={4}
            showBorder={false}
          >
            <h1>Үнийн санал авах</h1>
          </GradientText>
          <BlurText
            text="Борлуулалтын зөвлөхтэй онлайн уулзалтын цаг товлож, өөрийн бизнессдээ хийх дараагийн хөрөнгө оруулалтынхаа талаарх үнийн саналаа аваарай!"
            delay={20}
            animateBy="words"
            direction="bottom"
            className="text-center text-white/70 w-full max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed flex items-center justify-center"
            threshold={0.1}
            rootMargin="-100px"
          />
        </div>

        {/* Main Content */}
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
          {/* Contact Information Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Phone Card */}
            <a
              href="tel:+97680296007"
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer block"
            >
              <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-xp-violet/20 to-xp-cyan/20 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300 mb-1">
                  <Phone className="w-5 h-5 text-xp-cyan" />
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-white font-medium mb-2 text-sm sm:text-base">
                    Утас
                  </h3>
                  <p className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm md:text-base">
                    +976-80296007
                  </p>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=danny.otgontsetseg@gmail.com&su=Үнийн санал авах хүсэлт&body=Сайн байна уу,%0D%0A%0D%0AБи танай компанитай холбогдохыг хүсч байна.%0D%0A%0D%0AТанай үйлчилгээний талаар илүү ихийг мэдэхийг хүсч байна.%0D%0A%0D%0AБаярлалаа"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer block"
            >
              <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-xp-cyan/20 to-xp-teal/20 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300 mb-1">
                  <Mail className="w-5 h-5 text-xp-teal" />
                </div>
                <div className="flex-1 w-full px-2">
                  <h3 className="text-white font-medium mb-2 text-sm sm:text-base">
                    Имэйл
                  </h3>
                  <p className="text-white/70 hover:text-white transition-colors text-[10px] sm:text-xs md:text-sm break-words hyphens-auto leading-tight">
                    danny.otgontsetseg@gmail.com
                  </p>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-xp-teal/20 to-xp-violet/20 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300 mb-1">
                  <MapPin className="w-5 h-5 text-xp-violet" />
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-white font-medium mb-2 text-sm sm:text-base">
                    Байршил
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm md:text-base">
                    Ulaanbaatar, Mongolia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Book a Call Button */}
          <button
            onClick={() =>
              window.open(
                "https://calendly.com/danny-otgontsetseg/15min",
                "_blank"
              )
            }
            className="relative group bg-gradient-to-r from-xp-violet via-xp-cyan to-xp-teal text-white rounded-full px-10 py-5 text-lg font-semibold min-w-[320px] h-16 flex items-center justify-center gap-3 cursor-pointer overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.6),0_0_80px_rgba(56,189,248,0.4)] shadow-[0_0_20px_rgba(168,85,247,0.4),0_0_40px_rgba(56,189,248,0.2)]"
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-xp-violet via-xp-cyan to-xp-teal opacity-100 group-hover:opacity-90 transition-opacity duration-500"></div>

            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>

            {/* Border glow */}
            <div className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:border-white/60 transition-all duration-500"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center gap-3">
              <Calendar className="w-6 h-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <span className="transition-all duration-300 ease-out group-hover:tracking-wide">
                Онлайн уулзалт товлох
              </span>
            </div>

            {/* Pulse effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
          </button>
        </div>
      </ClickSpark>
    </div>
  );
}
