import { profile } from "../data/content";
import ShadowLogo from "./ShadowLogo";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-8">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <a
            href="#top"
            className="group transition-opacity hover:opacity-85"
            aria-label="Retour en haut"
          >
            <ShadowLogo
              variant="stacked"
              className="h-16 w-auto text-black transition-colors duration-300 group-hover:text-[#7C3AED] sm:h-20"
            />
          </a>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} {profile.name} (SHADOW). Tous droits réservés.
          </p>
        </div>

        <div className="flex flex-col items-center gap-1 text-center sm:items-end sm:text-right">
          <p className="text-sm font-medium text-gray-600">
            Développement <span className="text-[#7C3AED]">·</span> IA{" "}
            <span className="text-[#7C3AED]">·</span> Cybersécurité
          </p>
          <p className="text-xs text-gray-400">
            Conçu &amp; sécurisé avec précision
          </p>
        </div>
      </div>
    </footer>
  );
}
