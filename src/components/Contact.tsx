import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "../data/content";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#7C3AED]">
            Contact
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Discutons de votre prochain projet
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            Que ce soit pour une collaboration, une question technique ou simplement échanger sur
            le développement, l'IA ou la cybersécurité — n'hésitez pas à me contacter.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-violet-50 text-[#7C3AED]">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Email
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm font-medium text-black hover:text-[#7C3AED]"
                >
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-violet-50 text-[#7C3AED]">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Téléphone / WhatsApp
                </p>
                <a
                  href={`tel:${profile.phone}`}
                  className="text-sm font-medium text-black hover:text-[#7C3AED]"
                >
                  {profile.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-violet-50 text-[#7C3AED]">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Localisation
                </p>
                <p className="text-sm font-medium text-black">{profile.location}</p>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition hover:border-[#7C3AED] hover:text-[#7C3AED]"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition hover:border-[#7C3AED] hover:text-[#7C3AED]"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Nom
                </label>
                <input
                  required
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-[#7C3AED] focus:ring-2 focus:ring-violet-100"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="vous@exemple.com"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-[#7C3AED] focus:ring-2 focus:ring-violet-100"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Parlez-moi de votre projet..."
                className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-[#7C3AED] focus:ring-2 focus:ring-violet-100"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-[#7C3AED] px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-700"
            >
              Envoyer le message
              <Send size={16} />
            </button>
            {sent && (
              <p className="text-sm font-medium text-[#7C3AED]">
                Merci ! Votre message a bien été enregistré.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
