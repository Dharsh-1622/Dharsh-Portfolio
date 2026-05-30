const SCROLL_INTENT_KEY = "portfolio-scroll-intent";

export function setScrollIntent(hash: string): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(SCROLL_INTENT_KEY, hash);
}

export function consumeScrollIntent(): string | null {
  if (typeof window === "undefined") return null;
  const hash = sessionStorage.getItem(SCROLL_INTENT_KEY);
  sessionStorage.removeItem(SCROLL_INTENT_KEY);
  return hash;
}

export function clearUrlHash(): void {
  if (typeof window === "undefined" || !window.location.hash) return;
  window.history.replaceState(null, "", window.location.pathname + window.location.search);
}
