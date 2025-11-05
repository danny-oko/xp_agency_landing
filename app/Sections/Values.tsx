"use client";
import CurvedLoop from "@/components/CurvedLoop";
import MagicBento from "@/components/MagicBento";

export default function Values() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black/20">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12 w-full h-16 md:h-20 flex items-center justify-center pt-8 md:pt-12">
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
      <div className="w-full max-w-7xl flex-1 flex items-center justify-center px-2 md:px-4 pb-16 md:pb-24">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={400}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>
    </section>
  );
}
