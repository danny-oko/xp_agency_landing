"use client";
import CurvedLoop from "@/components/CurvedLoop";
import MagicBento from "@/components/MagicBento";

export default function Bento() {
  return (
    <section
      id="about"
      className="w-full max-w-screen-xl mx-auto flex h-[124vh] flex-col items-center justify-center gap-10 overflow-hidden px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="flex w-full max-w-5xl flex-none items-center justify-center h-[18vh]">
        <CurvedLoop
          marqueeText="We ✦ Are ✦ Passionate ✦ About ✦ Creating ✦ Beautiful ✦ and ✦ Functional ✦ Websites ✦ For Your ✦ Business Growth"
          speed={4}
          curveAmount={140}
          direction="right"
          interactive={true}
          className="text-2xl md:text-4xl lg:text-6xl font-bold text-center"
          wrapperClassName="flex h-full w-full items-center justify-center"
        />
      </div>

      <div className="flex w-full flex-1 items-center justify-center">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          disableAnimations={false}
          spotlightRadius={300}
          particleCount={12}
          enableTilt={false}
          className="flex h-full w-full max-w-6xl items-center justify-center mx-auto"
        />
      </div>
    </section>
  );
}
