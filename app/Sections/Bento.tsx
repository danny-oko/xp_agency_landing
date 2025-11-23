"use client";
import CurvedLoop from "@/components/CurvedLoop";
import MagicBento from "@/components/MagicBento";

export default function Bento() {
  return (
    <section
      id="about"
      className="w-full sm:w-[90%] md:w-[80%] mx-auto flex min-h-[100vh] sm:min-h-[120vh] md:min-h-[140vh] lg:min-h-[160vh] h-auto flex-col items-center justify-start gap-8 sm:gap-10 md:gap-12 overflow-hidden px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 mt-8 sm:mt-0"
    >
      <div className="flex w-full flex-none items-center justify-center min-h-[15vh] sm:min-h-[12vh] md:min-h-[10vh] h-auto overflow-visible mb-4 sm:mb-6 md:mb-8">
        <CurvedLoop
          marqueeText="We ✦ Are ✦ Passionate ✦ About ✦ Creating ✦ Beautiful ✦ and ✦ Functional ✦ Websites ✦ For Your ✦ Business Growth"
          speed={4}
          curveAmount={140}
          direction="right"
          interactive={true}
          className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold text-center"
          wrapperClassName="flex h-full w-full items-center justify-center overflow-visible"
        />
      </div>

      {/* MagicBento - visible on all devices with responsive layout */}
      <div className="flex w-full flex-1 items-center justify-center min-h-[75vh] sm:min-h-[90vh] md:min-h-[110vh] lg:min-h-[130vh] pb-8 sm:pb-12 max-w-full overflow-hidden">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          disableAnimations={false}
          spotlightRadius={300}
          particleCount={12}
          enableTilt={false}
          className="flex w-full max-w-full items-center justify-center mx-auto"
        />
      </div>
    </section>
  );
}
