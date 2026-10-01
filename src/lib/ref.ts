/* ============================================================================
 * Referral codes
 * ============================================================================
 * A connector gets a personal link, e.g. retenaai.com/?ref=kunle. The code is
 * held for the visit and attached to every WhatsApp click and form submission,
 * so introductions can be credited.
 *
 * Session storage, not a cookie: it lasts the visit, needs no consent banner,
 * and disappears when the tab closes.
 * ========================================================================== */

const KEY = "retenaai.ref";

/** Call once on load. Reads ?ref= and remembers it for the session. */
export function captureRef(): void {
  try {
    const value = new URLSearchParams(window.location.search).get("ref");
    if (value) sessionStorage.setItem(KEY, value.slice(0, 60));
  } catch {
    // Private mode — the visit simply goes uncredited.
  }
}

export function getRef(): string | null {
  try {
    return sessionStorage.getItem(KEY);
  } catch {
    return null;
  }
}
