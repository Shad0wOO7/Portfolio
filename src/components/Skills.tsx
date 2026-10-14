import { skillCategories } from "../data/content";
import ShadowEmblem from "./ShadowEmblem";

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50/60 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#7C3AED]">
            Compétences
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Mes domaines de compétences
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            Quatre axes complémentaires qui structurent mon apprentissage et mes projets.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#7C3AED]/40 hover:shadow-lg hover:shadow-violet-100"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-lg font-semibold text-black">{cat.title}</h3>
                  {cat.title === "Cybersécurité" && (
                    <span className="inline-flex items-center gap-1 rounded-md bg-black px-2 py-0.5 text-[10px] font-semibold tracking-wider text-white">
                      <ShadowEmblem className="h-2.5 w-2.5 text-[#7C3AED]" />
                      SHADOW
                    </span>
                  )}
                </div>
                <span className="text-sm font-semibold text-gray-300 transition-colors group-hover:text-[#7C3AED]">
                  {cat.number}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{cat.description}</p>
              <div className="mt-6 flex flex-col gap-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-3 rounded-xl border border-gray-100 bg-gray-50/70 px-3.5 py-2 transition-colors hover:border-violet-200 hover:bg-violet-50/30"
                  >
                    <span className="text-xs font-semibold text-gray-800">
                      {skill.name}
                    </span>
                    <span className="text-[11px] font-medium text-[#7C3AED]">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
