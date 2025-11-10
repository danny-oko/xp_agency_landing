"use client";
import DotGrid from "@/components/DotGrid";
import SplitText from "@/components/SplitText";
import { Facebook, Github, Globe, Instagram } from "lucide-react";

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
  {
    name: "Saran-Ochir. S",
    title: "Sales Manager · Product Service Manager",
    avatar: "https://xp-hazel-eta.vercel.app/saran-ochir-profile.jpg",
    links: {
      facebook: "https://www.facebook.com/saran.ochir.7",
      instagram: "https://www.instagram.com/saagii_21/",
      github: "https://github.com/Saagii_21",
      portfolio: "http://saagii-21.vercel.app/",
    },
  },
];

export default function Team() {
  return (
    <div className="w-full min-h-screen rounded-8xl bg-transparent flex flex-col items-center px-6 sm:px-8 lg:px-12 py-12 md:py-16 gap-10 md:gap-14">
      <div className="headline w-full flex flex-col items-center justify-center text-center">
        <SplitText
          text="Xperience -ийн ард хэн байгаа вэ?"
          className="text-2xl sm:text-3xl md:text-4xl font-semibold"
          delay={100}
          duration={0.2}
          ease="power2.inOut"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>

      <section className="w-full relative flex flex-col items-center">
        <div className="grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="relative h-64 md:h-72 w-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_-8px_24px_-10px_rgba(255,255,255,0.20),0_16px_32px_-12px_rgba(0,0,0,0.45)] hover:shadow-[0_-10px_28px_-12px_rgba(255,255,255,0.45),0_24px_40px_-12px_rgba(0,0,0,0.6)] transition-shadow"
            >
              <DotGrid
                className="opacity-40 pointer-events-none"
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
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {member.avatar && (
                      <img
                        src={member.avatar}
                        alt={`${member.name} avatar`}
                        className="h-10 w-10 rounded-full border border-white/20 object-cover"
                      />
                    )}
                    <div className="flex flex-col gap-1">
                      <p className="text-xs uppercase tracking-wide text-white/70">
                        {member.title}
                      </p>
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                    </div>
                  </div>
                  {member.links && (
                    <div className="flex items-center gap-2">
                      {member.links.facebook && (
                        <a
                          href={normalizeUrl(member.links.facebook)}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                          className="inline-flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
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
                          className="inline-flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
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
                          className="inline-flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
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
                          className="inline-flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          <Globe className="size-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
