import Image from "next/image";
import Link from "next/link";

const photos = [
  {
    src: "/images/about/chicken.jpg",
    alt: "A chicken",
    width: 4284,
    height: 5335,
  },
  {
    src: "/images/about/hollywood.jpeg",
    alt: "Hollywood",
    width: 768,
    height: 1024,
  },
  {
    src: "/images/about/mit.jpeg",
    alt: "MIT",
    width: 768,
    height: 1024,
  },
  {
    src: "/images/about/msu_math_research_day.jpeg",
    alt: "Michigan State research day",
    width: 768,
    height: 1024,
  },
  {
    src: "/images/about/msubasketball.jpeg",
    alt: "Michigan State basketball",
    width: 665,
    height: 1182,
  },
  {
    src: "/images/about/sky.jpeg",
    alt: "Sky",
    width: 768,
    height: 1024,
  },
  {
    src: "/images/about/spartan_stadium.jpeg",
    alt: "Spartan Stadium",
    width: 768,
    height: 1024,
  },
  {
    src: "/images/about/uuraf.jpeg",
    alt: "Undergraduate research forum",
    width: 768,
    height: 1024,
  },
];

export default function GalleryPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 sm:py-20">
      <header className="mb-8 max-w-xl">
        <Link href="/">← home</Link>
        <h1 className="mt-8 text-xl text-fg">Gallery</h1>
        {/* <p className="mt-2 text-fg-dim">A few moments I wanted to keep.</p> */}
      </header>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {photos.map((photo, index) => (
          <figure key={photo.src} className="mb-5 break-inside-avoid">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              priority={index < 3}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-auto w-full border border-rule object-cover transition-opacity duration-200 hover:opacity-80"
            />
          </figure>
        ))}
      </div>
    </main>
  );
}
