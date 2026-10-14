import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/content";
import ShadowLogo from "./ShadowLogo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#top"
          className="group flex items-center transition-opacity hover:opacity-85"
          aria-label="SHADOW - Accueil"
        >
          <ShadowLogo
            variant="inline"
            className="h-6 w-auto text-black transition-colors duration-300 group-hover:text-[#7C3AED] sm:h-7"
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-600 transition-colors hover:text-[#7C3AED]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-[#7C3AED] px-5 py-2 text-sm font-medium text-white shadow-sm shadow-violet-200 transition hover:bg-violet-700 lg:inline-block"
        >
          Me contacter
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-black lg:hidden"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gray-100 bg-white px-6 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#7C3AED]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-[#7C3AED] px-5 py-3 text-center text-sm font-medium text-white"
              >
                Me contacter
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
