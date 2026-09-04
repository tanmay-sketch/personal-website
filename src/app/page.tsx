import Image from "next/image";
import Link from "next/link";
import SportsPulse from "@/components/SportsPulse";

type Logo = {
  src: string;
  size: [number, number];
  invert?: boolean;
};

const LOGOS = {
  penn: { src: "/images/pennlogo.png", size: [1600, 1067] },
  msu: { src: "/images/msulogo.png", size: [3840, 2160] },
  serc: { src: "/images/experience/serc.svg", size: [225, 225] },
  revy: {
    src: "/images/experience/revylogo.svg",
    size: [341, 207],
  },
} satisfies Record<string, Logo>;

type Entry = {
  name: string;
  href: string;
  meta: string;
  logo: Logo;
  current?: boolean;
};

const education: Entry[] = [
  {
    name: "University of Pennsylvania",
    href: "https://www.upenn.edu",
    meta: "MSE, Data Science and AI",
    logo: LOGOS.penn,
    current: true,
  },
  {
    name: "Michigan State University",
    href: "https://msu.edu",
    meta: "BS, Computational Data Science",
    logo: LOGOS.msu,
  },
];

const experience: Entry[] = [
  {
    name: "Revy",
    href: "https://getrevy.app",
    meta: "ML Engineer · Apr 2026 — Jul 2026",
    logo: LOGOS.revy,
  },
  {
    name: "Revy",
    href: "https://getrevy.app",
    meta: "AI/ML Research Intern · May 2025 — Aug 2025",
    logo: LOGOS.revy,
  },
  {
    name: "SERC, IIIT Hyderabad",
    href: "https://serc.iiit.ac.in/",
    meta: "Research Intern · May 2025 — Jul 2025",
    logo: LOGOS.serc,
  },
  {
    name: "Michigan State University",
    href: "https://msu.edu",
    meta: "Undergraduate Learning Assistant · Aug 2023 — May 2025",
    logo: LOGOS.msu,
  },
];

function Mark({ logo }: { logo: Logo }) {
  return (
    <span className="flex h-11 w-14 shrink-0 items-center justify-center">
      <Image
        src={logo.src}
        alt=""
        width={logo.size[0]}
        height={logo.size[1]}
        unoptimized={logo.src.endsWith(".svg")}
        className={`h-9 w-auto max-w-14 object-contain${
          logo.invert ? " brightness-0 invert" : ""
        }`}
      />
    </span>
  );
}

function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <ul className="space-y-4">
      {entries.map((entry) => (
        <li key={entry.name + entry.meta} className="flex items-center gap-4">
          <Mark logo={entry.logo} />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline gap-x-2">
              <a href={entry.href} target="_blank" rel="noopener noreferrer">
                {entry.name}
              </a>
              {entry.current && <span className="text-accent text-[13px]">[current]</span>}
            </div>
            <div className="text-fg-dim">{entry.meta}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="text-sm text-fg">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-xl px-6 py-20 sm:py-24">
      <section
        aria-label="Introduction"
        className="flex flex-col gap-7 sm:flex-row sm:items-start sm:gap-8"
      >
        <span className="group relative block h-28 w-28 shrink-0 overflow-hidden rounded-full border border-rule">
          <Image
            src="/images/newprofilepic.png"
            alt="Tanmay Grandhisiri"
            width={976}
            height={1390}
            priority
            sizes="112px"
            className="h-full w-full object-cover object-[center_35%] transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
          />
          <Image
            src="/images/ghibliavatar.jpg"
            alt=""
            width={400}
            height={400}
            sizes="112px"
            className="absolute inset-0 h-full w-full object-cover [clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:[clip-path:inset(0_0_0_0)] motion-reduce:transition-none"
          />
        </span>

        <div className="flex-1">
          <p>
            Hi, I&apos;m Tanmay. I&apos;m pursuing Data Science and AI at Penn.
            <br />
            <br />
            I recently spent my time at{" "}
            <a
              href="https://getrevy.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Revy
            </a>{" "}
            building vision models and inference systems.
            <br />
            <br />
            I&apos;m from Hyderabad, India.
            <br />
            <br />
            I like to play the guitar and watch ESPN in my
            freetime.
          </p>
        </div>
      </section>

      <Section title="Education">
        <EntryList entries={education} />
      </Section>

      <Section title="Experience">
        <EntryList entries={experience} />
      </Section>

      <details className="mt-12">
        <summary>Links</summary>
        <ul className="mt-3 space-y-1 pl-4">
          <li>
            <a
              href="https://github.com/tanmay-sketch"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/tanmay-grandhisiri"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </li>
          <li className="text-fg-dim">
            <a
              href="https://blog.tanmaygrandhisiri.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              writing
            </a>
          </li>
          <li>
            <Link href="/gallery">gallery</Link>
          </li>
          <li>
            <a href="mailto:grandhisiri.tanmay@yahoo.com">email</a>
          </li>
          <li className="text-fg-dim">projects — soon</li>
          <li className="text-fg-dim">cooking — soon</li>
        </ul>
      </details>
      <SportsPulse />
    </main>
  );
}
