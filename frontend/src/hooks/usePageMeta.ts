import { useEffect } from "react";
import { site } from "@/lib/content";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

const setMeta = (selector: string, attr: "name" | "property", key: string, value: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", value);
};

/**
 * Sets a unique title and description for each route, plus the social sharing tags.
 */
const usePageMeta = ({ title, description, path, image }: PageMeta) => {
  useEffect(() => {
    document.title = title;
    const url = `${site.url}${path}`;

    setMeta('meta[name="description"]', "name", "description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    if (image) {
      setMeta('meta[property="og:image"]', "property", "og:image", `${site.url}${image}`);
      setMeta('meta[name="twitter:image"]', "name", "twitter:image", `${site.url}${image}`);
    }
  }, [title, description, path, image]);
};

export default usePageMeta;
