/**
 * Optional GA4 wiring. Nothing loads unless VITE_GA_MEASUREMENT_ID is set,
 * so local builds and previews stay free of third-party requests.
 */

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

let initialised = false;

export const initAnalytics = () => {
  if (initialised || !MEASUREMENT_ID || typeof document === "undefined") return;
  initialised = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, { send_page_view: false });
};

export const trackPageView = (path: string) => {
  if (!MEASUREMENT_ID || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: `${window.location.origin}${path}`,
  });
};

export const trackEvent = (name: string, params: Record<string, string | number> = {}) => {
  if (!MEASUREMENT_ID || !window.gtag) return;
  window.gtag("event", name, params);
};
