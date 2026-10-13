import { aboutHighlights, profile } from "../data/content";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#7C3AED]">
            À propos
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Un profil au croisement de trois disciplines
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl border border-gray-100 bg-gray-50/60">
              <img
                src="/images/avatar.png"
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              Je m'appelle <span className="font-semibold text-black">Edi TUTONDA</span>, étudiant en
              informatique en{" "}
              <span className="font-medium text-black">République Démocratique du Congo</span>. Mon
              parcours s'articule autour du génie logiciel, mais mes centres d'intérêt vont bien
              au-delà : je m'intéresse profondément à la{" "}
              <span className="font-medium text-black">manière dont les systèmes sont construits</span>,
              à l'intégration de l'intelligence artificielle dans des projets concrets, et aux
              fondamentaux de la cybersécurité.
            </p>
            <p className="mt-5 text-base leading-relaxed text-gray-500 sm:text-lg">
              Je ne cherche pas seulement à utiliser des outils, mais à comprendre leur
              fonctionnement, leurs limites et leurs alternatives — avec une préférence marquée pour
              des solutions simples, claires et proportionnées au problème plutôt que pour
              l'overengineering.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {aboutHighlights.map((item) => (
                <div key={item.title} className="border-l-2 border-[#7C3AED] pl-4">
                  <h3 className="text-sm font-semibold text-black">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
