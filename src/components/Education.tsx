import { GraduationCap } from "lucide-react";
import { education } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="bg-gray-50/60 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#7C3AED]">
            Formation
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Parcours académique &amp; auto-formation
          </h2>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gray-200" />
          <div className="flex flex-col gap-10">
            {education.map((item) => (
              <div key={item.title} className="relative flex gap-6 pl-0">
                <div className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-gray-200 bg-white text-[#7C3AED] shadow-sm">
                  <GraduationCap size={18} />
                </div>
                <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7C3AED]">
                    {item.period}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-black">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-gray-400">{item.place}</p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
