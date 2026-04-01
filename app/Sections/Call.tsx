"use client";

import BlurText from "@/components/BlurText";
import ClickSpark from "@/components/ClickSpark";
import GradientText from "@/components/GradientText";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";

export default function Call() {
  return (
    <div
      id="call"
      className="relative mx-auto mt-12 flex min-h-[75vh] w-[75%] flex-col items-center justify-center overflow-hidden rounded-8xl border border-white/10 bg-xp-bg px-6 py-12 sm:mt-8 sm:px-10 sm:py-14 md:px-14 md:py-16"
    >
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Header Section */}
        <div className="headline relative mb-10 flex w-full flex-col items-center text-center sm:mb-12 md:mb-14">
          <GradientText
            className="mb-4 text-3xl font-extrabold sm:mb-5 sm:text-4xl md:text-5xl"
            colors={["#FFFFFF", "#E5E7EB", "#FFFFFF", "#E5E7EB", "#FFFFFF"]}
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
            className="mx-auto flex w-full max-w-2xl items-center justify-center text-center text-sm leading-relaxed text-white/75 sm:text-base md:text-lg"
            threshold={0.1}
            rootMargin="-100px"
          />
        </div>

        {/* Main Content */}
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 sm:gap-10">
          {/* Contact Information Cards */}
          <div className="grid w-full grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
            {/* Phone Card */}
            <a
              href="tel:+97680296007"
              className="group relative block rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 sm:p-6"
            >
              <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
                <div className="mb-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition-all duration-300 group-hover:border-white/35">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-white font-medium mb-2 text-sm sm:text-base">
                    Утас
                  </h3>
                  <p className="text-white/75 transition-colors hover:text-white text-xs sm:text-sm md:text-base">
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
              className="group relative block rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 sm:p-6"
            >
              <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
                <div className="mb-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition-all duration-300 group-hover:border-white/35">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 w-full px-2">
                  <h3 className="text-white font-medium mb-2 text-sm sm:text-base">
                    Имэйл
                  </h3>
                  <p className="text-white/75 transition-colors hover:text-white text-[10px] sm:text-xs md:text-sm break-words hyphens-auto leading-tight">
                    danny.otgontsetseg@gmail.com
                  </p>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 sm:p-6">
              <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
                <div className="mb-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition-all duration-300 group-hover:border-white/35">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-white font-medium mb-2 text-sm sm:text-base">
                    Байршил
                  </h3>
                  <p className="text-white/75 text-xs sm:text-sm md:text-base">
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
            className="group relative flex h-12 w-full max-w-[320px] items-center justify-center gap-2 overflow-hidden rounded-2xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_32px_-12px_rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15 md:h-14 md:max-w-[360px] md:min-w-[320px] md:gap-3 md:px-8 md:py-4 md:text-base lg:h-16 lg:max-w-[400px] lg:min-w-[360px] lg:px-10 lg:py-5 lg:text-lg"
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-95"></div>

            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>

            {/* Border glow */}
            <div className="absolute inset-0 rounded-2xl border border-white/35 transition-all duration-300 group-hover:border-white/60"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center gap-2 md:gap-3">
              <Calendar className="h-4 w-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 md:h-5 md:w-5 lg:h-6 lg:w-6" />
              <span className="whitespace-nowrap transition-all duration-300 ease-out group-hover:tracking-wide">
                Онлайн уулзалт товлох
              </span>
            </div>

            {/* Pulse effect */}
            <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
          </button>
        </div>
      </ClickSpark>
    </div>
  );
}
