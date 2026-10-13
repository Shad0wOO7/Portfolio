import { ExternalLink } from "lucide-react";
import { projects } from "../data/content";
import { GithubIcon } from "./icons";

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#7C3AED]">
              Projets
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Projets &amp; réalisations
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              Une sélection transparente de mes projets universitaires, personnels et explorations
              techniques — avec code source accessible sur GitHub.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#7C3AED]/40 hover:shadow-lg hover:shadow-violet-100"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7C3AED]">
                    {project.category}
                  </span>
                  <span className="rounded-full bg-violet-50 px-2.5 py-0.5 text-[11px] font-medium text-[#7C3AED]">
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-black">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-xs font-medium text-gray-400">{project.year}</span>
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 transition hover:text-[#7C3AED]"
                      aria-label={`Code source de ${project.title}`}
                    >
                      <GithubIcon size={14} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#7C3AED] transition hover:text-violet-700"
                    >
                      <span>Aperçu</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
