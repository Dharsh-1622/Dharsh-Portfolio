const NAV_OFFSET = 72;

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function smoothScrollTo(y: number, duration = 700): void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, y);
    return;
  }

  const startY = window.scrollY;
  const distance = y - startY;
  const startTime = performance.now();

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

export function scrollToSection(hash: string): void {
  const id = hash.replace(/^#/, "");
  const target = document.getElementById(id);

  if (!target) {
    smoothScrollTo(0);
    return;
  }

  const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  smoothScrollTo(Math.max(0, top));
}
