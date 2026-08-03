import { useEffect } from "react";

type Meta = {
  title: string;
  description?: string;
};

/** Sets the document title and meta description per route. */
export function usePageMeta({ title, description }: Meta) {
  useEffect(() => {
    document.title = title;

    if (!description) return;
    let tag = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "description";
      document.head.appendChild(tag);
    }
    tag.content = description;
  }, [title, description]);
}
