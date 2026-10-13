import { technologies } from "../data/content";

export default function Technologies() {
  return (
    <section id="technologies" className="bg-gray-50/60 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#7C3AED]">
            Technologies
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Outils &amp; technologies utilisés
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-6 text-center text-sm font-medium text-gray-700 transition-colors hover:border-[#7C3AED]/50 hover:text-[#7C3AED]"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
