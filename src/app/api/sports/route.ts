import { NextResponse } from "next/server";

const FEED_URL =
  "https://news.google.com/rss/search?q=sports&hl=en-US&gl=US&ceid=US:en";

function decodeXml(value: string) {
  return value
    .replace(/^<!\[CDATA\[/, "")
    .replace(/\]\]>$/, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function tagValue(item: string, tag: string) {
  const match = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return match ? decodeXml(match[1].trim()) : "";
}

export async function GET() {
  try {
    const response = await fetch(FEED_URL, {
      next: { revalidate: 900 },
      headers: { "User-Agent": "tanmaygrandhisiri.com sports ticker" },
    });

    if (!response.ok) {
      throw new Error("Sports feed request failed");
    }

    const feed = await response.text();
    const headlines = [...feed.matchAll(/<item>([\s\S]*?)<\/item>/g)]
      .slice(0, 15)
      .map((match) => ({
        title: tagValue(match[1], "title"),
        url: tagValue(match[1], "link"),
      }))
      .filter((headline) => headline.title && headline.url);

    return NextResponse.json({ headlines });
  } catch {
    return NextResponse.json({ headlines: [] }, { status: 503 });
  }
}
