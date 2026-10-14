import { ArrowDown, Mail } from "lucide-react";
import { profile } from "../data/content";
import { GithubIcon, LinkedinIcon } from "./icons";
import ShadowEmblem from "./ShadowEmblem";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      {/* ── Grille centrale Hero ── */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* ── Colonne Gauche : Présentation & Bio (Col 7) ── */}
          <div className="relative z-10 lg:col-span-7">
            {/* Badge status SHADOW */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/80 px-4 py-1.5 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">
              <ShadowEmblem className="h-3.5 w-3.5 text-[#7C3AED]" />
              <span className="font-semibold tracking-wide text-black">SHADOW</span>
              <span className="text-gray-300">·</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
                Disponible pour collaborations
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            
            <p className="mt-4 text-lg font-semibold text-[#7C3AED] sm:text-xl">
              {profile.role}
            </p>
            
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:bg-[#7C3AED] hover:shadow-violet-200 hover:-translate-y-0.5"
              >
                Voir mes projets
              </a>
              <a
                href="#contact"
                className="rounded-full border border-gray-300 bg-white/50 px-6 py-3 text-sm font-medium text-black backdrop-blur-xs transition-all hover:border-[#7C3AED] hover:text-[#7C3AED] hover:-translate-y-0.5"
              >
                Me contacter
              </a>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-xs transition hover:border-[#7C3AED] hover:text-[#7C3AED] hover:shadow-sm"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-xs transition hover:border-[#7C3AED] hover:text-[#7C3AED] hover:shadow-sm"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-xs transition hover:border-[#7C3AED] hover:text-[#7C3AED] hover:shadow-sm"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* ── Colonne Droite : Showcase SHADOW Emblem Grandiose (Col 5) ── */}
          <div className="relative flex items-center justify-center lg:col-span-5 lg:justify-end">
            
            {/* Halo lumineux multicouche */}
            <div
              className="pointer-events-none absolute"
              style={{
                width: "120%",
                height: "120%",
                maxWidth: 480,
                maxHeight: 480,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(99,102,241,0.08) 45%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            {/* Vitrine de l'emblème avec HUD cybernétique */}
            <div className="group relative flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80 md:h-96 md:w-96">
              
              {/* Anneau orbital externe discret en rotation lente */}
              <div 
                className="pointer-events-none absolute inset-0 rounded-full border border-dashed border-violet-400/25"
                style={{ animation: "shadowSpin 50s linear infinite" }}
              />


              {/* Conteneur Emblème avec effet Glitch Cyberpunk & Glow */}
              <div className="shadow-glitch-wrap relative h-[78%] w-[78%] transition-transform duration-500 group-hover:scale-105">
                
                {/* Couche de base : violet profond avec drop-shadow lumineux */}
                <ShadowEmblem
                  className="shadow-glitch-base absolute inset-0 h-full w-full text-[#7C3AED]"
                  style={{
                    filter: "drop-shadow(0 0 24px rgba(124, 58, 237, 0.40))",
                    opacity: 0.92,
                  }}
                />

                {/* Couche glitch cyan (chromatic split) */}
                <ShadowEmblem
                  className="shadow-glitch-cyan pointer-events-none absolute inset-0 h-full w-full"
                  style={{ color: "#06b6d4", opacity: 0 }}
                />

                {/* Couche glitch rouge/magenta (chromatic split) */}
                <ShadowEmblem
                  className="shadow-glitch-red pointer-events-none absolute inset-0 h-full w-full"
                  style={{ color: "#ef4444", opacity: 0 }}
                />
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ── Keyframes Glitch & Orbital Spin ── */}
      <style>{`
        @keyframes shadowSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Glitch Cyberpunk périodique toutes les ~8s */
        @keyframes shadowGlitchCyan {
          0%, 86%, 100% { opacity: 0; transform: translate(0, 0); }
          87%           { opacity: 0.8; transform: translate(-6px, 2px); }
          88%           { opacity: 0;   transform: translate(0, 0); }
          89%           { opacity: 0.6; transform: translate(-4px, -2px); }
          90%           { opacity: 0;   transform: translate(0, 0); }
          91%           { opacity: 0.4; transform: translate(-2px, 1px); }
          91.5%         { opacity: 0;   transform: translate(0, 0); }
        }

        @keyframes shadowGlitchRed {
          0%, 86%, 100% { opacity: 0; transform: translate(0, 0); }
          87%           { opacity: 0;   transform: translate(0, 0); }
          88%           { opacity: 0.75; transform: translate(6px, -2px); }
          89%           { opacity: 0;   transform: translate(0, 0); }
          90%           { opacity: 0.5;  transform: translate(4px, 2px); }
          91%           { opacity: 0;   transform: translate(0, 0); }
          91.5%         { opacity: 0.35; transform: translate(2px, -1px); }
          92%           { opacity: 0;   transform: translate(0, 0); }
        }

        @keyframes shadowGlitchBase {
          0%, 86%, 100% { opacity: 0.92; }
          87%, 89%      { opacity: 0.60; transform: translate(1px, -1px); }
          88%, 90%      { opacity: 0.98; transform: translate(-1px, 1px); }
          91%           { opacity: 0.92; transform: translate(0, 0); }
        }

        .shadow-glitch-cyan  { animation: shadowGlitchCyan 8s ease-in-out infinite; }
        .shadow-glitch-red   { animation: shadowGlitchRed  8s ease-in-out infinite; }
        .shadow-glitch-base  { animation: shadowGlitchBase 8s ease-in-out infinite; }
      `}</style>

      {/* Indicateur de défilement vers le bas */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-400 transition hover:text-[#7C3AED] lg:flex"
      >
        <span className="text-[11px] font-medium uppercase tracking-widest">Découvrir</span>
        <ArrowDown size={15} className="animate-bounce" />
      </a>
    </section>
  );
}

