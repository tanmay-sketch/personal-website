"use client";

import { useEffect, useState } from "react";

type Headline = {
  title: string;
  url: string;
};

const DISPLAY_INTERVAL = 9_000;
const BALL_FRAMES = ["[o..]", "[.o.]", "[..o]", "[.o.]"];

function truncateHeadline(title: string, maxLength = 56) {
  return title.length > maxLength ? `${title.slice(0, maxLength - 1).trimEnd()}…` : title;
}

export default function SportsPulse() {
  const [headlines, setHeadlines] = useState<Headline[]>([]);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [ballFrame, setBallFrame] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;

    fetch("/api/sports")
      .then((response) => response.json())
      .then((data: { headlines?: Headline[] }) => {
        if (active) {
          setHeadlines(data.headlines ?? []);
        }
      })
      .catch(() => undefined)
      .finally(() => {
        if (active) {
          setLoaded(true);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (headlines.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setHeadlineIndex((current) => (current + 1) % headlines.length);
    }, DISPLAY_INTERVAL);

    return () => window.clearInterval(interval);
  }, [headlines.length]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setBallFrame((current) => (current + 1) % BALL_FRAMES.length);
    }, 240);

    return () => window.clearInterval(interval);
  }, []);

  const headline = headlines[headlineIndex];

  if (!headline) {
    return (
      <aside className="fixed bottom-3 left-3 right-3 z-20 border-l border-accent/60 bg-bg/90 py-2 pl-3 pr-2 text-xs backdrop-blur sm:bottom-4 sm:left-auto sm:right-4 sm:w-64">
        <span className="flex items-center gap-2 text-fg-dim">
          <span className="inline-block w-9 text-accent" aria-hidden="true">
            {BALL_FRAMES[ballFrame]}
          </span>
          <span>{loaded ? "sports feed unavailable" : "loading sports news…"}</span>
        </span>
      </aside>
    );
  }

  return (
    <a
      href={headline.url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-3 left-3 right-3 z-20 border-l border-accent/60 bg-bg/90 py-2 pl-3 pr-2 text-xs backdrop-blur sm:bottom-4 sm:left-auto sm:right-4 sm:w-64"
      aria-label={`Open sports headline: ${headline.title}`}
    >
      <span className="flex items-center gap-2 text-fg-dim">
        <span className="inline-block w-9 text-accent" aria-hidden="true">
          {BALL_FRAMES[ballFrame]}
        </span>
        <span>sports news</span>
        <span className="ml-auto text-base leading-none text-accent">↗</span>
      </span>
      <span className="mt-1 block leading-5 text-fg">
        {truncateHeadline(headline.title)}
      </span>
    </a>
  );
}
