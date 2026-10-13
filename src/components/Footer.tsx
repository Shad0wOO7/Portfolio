import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left lg:px-8">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
        </p>
        <p className="text-sm text-gray-400">
          Développement <span className="text-[#7C3AED]">·</span> IA{" "}
          <span className="text-[#7C3AED]">·</span> Cybersécurité
        </p>
      </div>
    </footer>
  );
}
