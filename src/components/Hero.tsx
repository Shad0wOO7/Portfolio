import { ArrowDown, Mail } from "lucide-react";
import { profile } from "../data/content";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32"
    >
      <img
        src="/images/hero-pattern.png"
        alt=""
        className="pointer-events-none absolute -right-20 top-0 h-[560px] w-[560px] opacity-[0.12] lg:opacity-20"
      />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-gray-500">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
            Disponible pour des projets &amp; collaborations
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg font-medium text-[#7C3AED] sm:text-xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-[#7C3AED]"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-black transition hover:border-[#7C3AED] hover:text-[#7C3AED]"
            >
              Me contacter
            </a>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-[#7C3AED] hover:text-[#7C3AED]"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-[#7C3AED] hover:text-[#7C3AED]"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-[#7C3AED] hover:text-[#7C3AED]"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-400 lg:flex"
      >
        <span className="text-[11px] uppercase tracking-widest">Découvrir</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
