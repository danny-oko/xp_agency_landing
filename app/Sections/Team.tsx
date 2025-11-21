"use client";
import DotGrid from "@/components/DotGrid";
import SplitText from "@/components/SplitText";
import { Facebook, Github, Globe, Instagram } from "lucide-react";
import Image from "next/image";
import React from "react";

type TeamMember = {
  name: string;
  title: string;
  avatar?: string;
  links?: {
    facebook?: string;
    instagram?: string;
    github?: string;
    portfolio?: string;
  };
};

function normalizeUrl(url?: string) {
  if (!url) return undefined;
  const trimmed = url.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (trimmed.startsWith("www.")) return `https://${trimmed}`;
  if (trimmed.startsWith("#")) return trimmed;
  return `https://${trimmed}`;
}

// Memoized team member card component
const TeamMemberCard = React.memo<{ member: TeamMember }>(({ member }) => (
  <div className="group relative h-80 md:h-96 w-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_-8px_24px_-10px_rgba(255,255,255,0.20),0_16px_32px_-12px_rgba(0,0,0,0.45)] hover:shadow-[0_-10px_28px_-12px_rgba(255,255,255,0.45),0_24px_40px_-12px_rgba(0,0,0,0.6)] hover:border-white/20 transition-all duration-300 ">
    <DotGrid
      className="opacity-40 pointer-events-none group-hover:opacity-60 transition-opacity duration-300"
      dotSize={8}
      gap={18}
      baseColor="#ffffff20"
      activeColor="#ffffff"
      proximity={120}
      shockRadius={220}
      shockStrength={6}
      resistance={1000}
      returnDuration={1.2}
    />
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-black/20 to-transparent " />
    <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 px-6 ">
      <div className="w-full flex flex-col items-center gap-4">
        {member.avatar && (
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Image
              src={member.avatar}
              alt={`${member.name} avatar`}
              width={80}
              height={80}
              className="relative h-20 w-20 rounded-full border-2 border-white/30 object-cover group-hover:border-white/50 transition-all duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-xs uppercase tracking-wider text-white/70 font-medium">
            {member.title}
          </p>
          <h3 className="text-xl font-semibold text-white">{member.name}</h3>
        </div>
        {member.links && (
          <div className="flex items-center gap-3 mt-2">
            {member.links.facebook && (
              <a
                href={normalizeUrl(member.links.facebook)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-200"
              >
                <Facebook className="size-4" />
              </a>
            )}
            {member.links.instagram && (
              <a
                href={normalizeUrl(member.links.instagram)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-200"
              >
                <Instagram className="size-4" />
              </a>
            )}
            {member.links.github && (
              <a
                href={normalizeUrl(member.links.github)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-200"
              >
                <Github className="size-4" />
              </a>
            )}
            {member.links.portfolio && (
              <a
                href={normalizeUrl(member.links.portfolio)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-200"
              >
                <Globe className="size-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
));
TeamMemberCard.displayName = "TeamMemberCard";

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Danny. O",
    title: "Founder · PM · Developer",
    avatar: "https://images8.alphacoders.com/483/483462.png",
    links: {
      facebook: "https://www.facebook.com/dnii.dnii.0412",
      instagram: "https://www.instagram.com/dnii_d/",
      github: "https://www.github.com/dnii0412",
      portfolio: "https://dannyos.vercel.app",
    },
  },
  {
    name: "Bayarbayasgalan. B",
    title: "Lead Developer",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnb34N79_25Qvdze3AEKBpgrVV7zWyNLwr_Q&s",
    links: {
      facebook: "https://www.facebook.com/profile.php?id=61581622687198",
      instagram: "https://www.instagram.com/xuji877/",
      github: "https://github.com/Zerogne",
    },
  },
  {
    name: "Batmandakh. B",
    title: "Social Media Marketing Manager",
    avatar:
      "https://static.wikia.nocookie.net/disney/images/3/37/Profile_-_Simba.jpeg",
    links: {
      facebook: "https://www.facebook.com/batmandakh.batsukh.5",
      instagram: "https://www.instagram.com/bta1023/",
    },
  },
];

export default function Team() {
  return (
    <div
      id="team"
      className="w-[80%] mx-auto h-[80vh] rounded-8xl bg-transparent flex flex-col justify-center items-center px-6 sm:px-8 lg:px-12 py-12 md:py-16 gap-10 md:gap-14"
    >
      <div className="headline w-full flex flex-col items-center justify-center text-center">
        <SplitText
          text="XP - ийн ард хэн байгаа вэ?"
          className="text-2xl sm:text-3xl md:text-4xl font-semibold"
          delay={100}
          duration={1.6}
          ease="elastic.out(1,1.1)"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>

      <section className="w-full relative flex flex-col items-center">
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}
