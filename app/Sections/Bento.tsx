"use client";
import CurvedLoop from "@/components/CurvedLoop";
import MagicBento from "@/components/MagicBento";

export default function Bento() {
  return (
    <section
      id="about"
      className="w-full sm:w-[90%] md:w-[80%] mx-auto flex min-h-[50vh] md:min-h-[100vh] max-h-[140vh] h-auto flex-col items-center justify-center gap-10 overflow-visible px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-8 sm:mt-0"
    >
      <div className="flex w-full flex-none items-center justify-center min-h-[25vh] sm:min-h-[20vh] md:min-h-[18vh] h-auto overflow-visible">
        <CurvedLoop
          marqueeText="We ✦ Are ✦ Passionate ✦ About ✦ Creating ✦ Beautiful ✦ and ✦ Functional ✦ Websites ✦ For Your ✦ Business Growth"
          speed={4}
          curveAmount={140}
          direction="right"
          interactive={true}
          className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl font-bold text-center"
          wrapperClassName="flex h-full w-full items-center justify-center overflow-visible"
        />
      </div>

      {/* MagicBento - hidden on mobile, shown on tablet+ */}
      <div className="hidden md:flex w-full flex-1 items-center justify-center">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          disableAnimations={false}
          spotlightRadius={300}
          particleCount={12}
          enableTilt={false}
          className="flex h-full w-full items-center justify-center mx-auto"
        />
      </div>
    </section>
  );
}
