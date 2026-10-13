import { Award } from "lucide-react";
import { certifications } from "../data/content";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#7C3AED]">
            Certifications
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            En cours d'apprentissage
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            Par souci de transparence : je ne revendique aucune certification obtenue à ce jour.
            Voici les axes sur lesquels je me forme actuellement, avec l'objectif d'obtenir des
            certifications reconnues à moyen terme.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex items-start gap-4 rounded-2xl border border-gray-200 p-6"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-violet-50 text-[#7C3AED]">
                <Award size={20} />
              </div>
              <div>
                <span className="inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  {cert.status}
                </span>
                <h3 className="mt-2 text-base font-semibold text-black">{cert.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-500">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
