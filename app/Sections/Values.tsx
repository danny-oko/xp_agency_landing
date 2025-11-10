"use client";
import CurvedLoop from "@/components/CurvedLoop";
import MagicBento from "@/components/MagicBento";

export default function Values() {
  return (
    <section className="relative w-full overflow-hidden bg-black/20 px-4 sm:px-6 lg:px-8 py-14 md:py-20 flex flex-col items-center gap-6 md:gap-10">
      {/* Header Section */}
      <div className="text-center w-full min-h-[3.5rem] flex items-center justify-center">
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
