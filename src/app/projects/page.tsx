import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import projects from "@/lib/projects.json";

export const metadata: Metadata = {
  title: "Projects — Tanmay Grandhisiri",
  description: "A selection of projects by Tanmay Grandhisiri.",
};

export default function ProjectsPage() {
  const recentProjects = [...projects].reverse();

  return (
    <main className="mx-auto w-full max-w-xl px-6 py-12 sm:py-20">
      <header className="mb-10 sm:mb-12">
        <Link href="/">← home</Link>
        <h1 className="mt-8 text-xl text-fg">Projects</h1>
        <p className="mt-2 text-fg-dim">
          Things I&apos;ve built, from machine learning experiments to web apps.
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-5">
        {recentProjects.map((project, index) => (
          <li
            key={project.id}
            className="group self-start overflow-hidden rounded-xl border border-rule bg-bg transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[0_10px_24px_rgba(36,39,34,0.08)] motion-reduce:transition-none"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} (opens in a new tab)`}
              className="block text-fg no-underline sm:grid sm:grid-cols-[13.5rem_1fr]"
            >
              <span
                className="relative block aspect-[8/5] overflow-hidden border-b border-rule sm:aspect-auto sm:min-h-44 sm:border-r sm:border-b-0"
                style={{ backgroundImage: project.background }}
              >
                <span className="absolute inset-0 bg-black/5 transition-colors duration-300 group-hover:bg-transparent" />
                <Image
                  src={project.image}
                  alt=""
                  fill
                  priority={index < 2}
                  sizes="(max-width: 640px) calc(100vw - 3rem), 216px"
                  className="object-contain p-2.5 drop-shadow-lg transition-transform duration-500 ease-out group-hover:scale-[1.025] sm:p-2 motion-reduce:transition-none"
                />
              </span>

              <span className="flex flex-col py-4 pr-4 pl-6">
                <span className="flex flex-wrap items-center justify-between gap-1.5">
                  <span className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent/10 px-2 py-1 text-[10px] leading-none text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </span>
                  <span className="text-[12px] text-fg-dim">
                    {project.duration}
                  </span>
                </span>

                <span className="mt-4 flex items-baseline gap-1.5 leading-snug text-fg">
                  <span>{project.title}</span>
                  <span
                    aria-hidden="true"
                    className="text-sm text-accent transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                  >
                    ↗
                  </span>
                </span>

                <span className="mt-1.5 block text-[13px] leading-relaxed text-fg-dim">
                  {project.description}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
