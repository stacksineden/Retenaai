import { useEffect } from "react";

type Meta = {
  title: string;
  description?: string;
  /** e.g. "noindex, nofollow". Removed again when the page unmounts. */
  robots?: string;
};

function upsertMeta(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.name = name;
    document.head.appendChild(tag);
  }
  tag.content = content;
  return tag;
}

/**
 * Keeps the tab title, description and robots tag right as visitors click
 * between pages. The build also bakes these into each route's HTML for
 * crawlers and link previews — see src/data/seo.ts.
 */
export function usePageMeta({ title, description, robots }: Meta) {
  useEffect(() => {
    document.title = title;
    if (description) upsertMeta("description", description);
  }, [title, description]);

  useEffect(() => {
    if (!robots) return;
    const tag = upsertMeta("robots", robots);
    return () => tag.remove();
  }, [robots]);
}
