/**
 * Data source for the miniapp marketplace.
 * Rendering lives in the React components; content lives here.
 */

export interface Miniapp {
  id: string;
  name: string;
  /** Public domain of the miniapp, shown on the card and used for the link. */
  domain: string;
  url: string;
  slogan: string;
  /** Emoji glyph used as the miniapp icon. */
  icon: string;
  /** Tailwind gradient classes used for the card cover. */
  cover: string;
  /** ISO date, used by the "Newest" sort. */
  publishedAt: string;
  /** Higher is more popular, used by the "Popularity" sort. */
  popularity: number;
}

export const MINIAPPS: Miniapp[] = [
  {
    id: "copper-cash",
    name: "Copper Cash",
    domain: "copper.cash",
    url: "https://copper.cash",
    slogan: "Hard assets, liquid transfers. Move value as easily as sending a text.",
    icon: "🪙",
    cover: "from-amber-500 via-orange-600 to-rose-600",
    publishedAt: "2026-08-14",
    popularity: 92,
  },
  {
    id: "hub-live-typing",
    name: "HUB Live Typing",
    domain: "hubtyping.com",
    url: "https://hubtyping.com",
    slogan: "Seamlessly type from your phone into the HUB miniapps on your desktop.",
    icon: "⌨️",
    cover: "from-sky-500 via-blue-600 to-indigo-600",
    publishedAt: "2026-09-02",
    popularity: 74,
  },
  {
    id: "vision-one",
    name: "Vision ONE",
    domain: "v1c.eu",
    url: "https://v1c.eu",
    slogan: "A cooperative for modern collaboration and shared growth.",
    icon: "🔭",
    cover: "from-emerald-500 via-teal-600 to-cyan-600",
    publishedAt: "2026-07-21",
    popularity: 61,
  },
];

export function getMiniapps(): Miniapp[] {
  return MINIAPPS;
}
