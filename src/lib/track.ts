/* ============================================================================
 * Event tracking
 * ============================================================================
 * Every CTA is wired to an event now so nothing needs revisiting later. Until
 * [ANALYTICS_TOOL] is chosen this does nothing except log in development —
 * no third-party script, no cookies, no weight on the page.
 *
 * TO SWITCH ON: add the tool's script to index.html and send the event inside
 * `send` below. The referral code rides along on every event.
 * ========================================================================== */

import { getRef } from "./ref";

export type TrackEvent =
  | "audit_click_hero"
  | "audit_click_section"
  | "audit_click_final"
  | "audit_click_sticky"
  | "audit_click_nav"
  | "audit_click_case_study"
  | "ads_only_click"
  | "refer_click"
  | "form_submit"
  | "video_play"
  | "case_study_view";

type Props = Record<string, string | number | boolean | null>;

export function track(event: TrackEvent, props: Props = {}): void {
  const payload = { ...props, ref: getRef() };

  if (import.meta.env.DEV) {
    console.info("[track]", event, payload);
    return;
  }

  // [ANALYTICS_TOOL] — send `event` and `payload` here once a tool is chosen.
  void payload;
}
