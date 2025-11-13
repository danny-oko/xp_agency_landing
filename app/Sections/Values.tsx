"use client";
import dynamic from "next/dynamic";
import CurvedLoop from "@/components/CurvedLoop";

// Lazy load MagicBento (heavy GSAP animations)
const MagicBento = dynamic(() => import("@/components/MagicBento"), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-6xl h-[600px] flex items-center justify-center">
      <div className="text-gray-400">Loading...</div>
    </div>
  ),
});

export default function Values() {
  return (
    <section id="services" className="relative w-full overflow-hidden bg-black/20 px-4 sm:px-6 lg:px-8 pt-0 pb-14 md:pb-20 flex flex-col items-center gap-3 md:gap-4">
      {/* Header Section */}
      <div className="text-center w-full min-h-[3.5rem] flex items-center justify-center mb-1 md:mb-2">
        <CurvedLoop
          marqueeText="We ✦ Are ✦ Passionate ✦ About ✦ Creating ✦ Beautiful ✦ and ✦ Functional ✦ Websites ✦ For Your ✦ Business Growth"
          speed={4}
          curveAmount={140}
          direction="right"
          interactive={true}
          className="text-2xl md:text-4xl lg:text-6xl font-bold"
        />
      </div>

      {/* Magic Bento Container */}
      <div className="w-full max-w-6xl flex items-center justify-center px-1 sm:px-4 lg:px-6">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={400}
          particleCount={64}
          glowColor="132, 0, 240"
        />
      </div>
    </section>
  );
}
