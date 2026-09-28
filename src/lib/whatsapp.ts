/* ============================================================================
 * WhatsApp links
 * ============================================================================
 * Every CTA on the Nigerian site opens WhatsApp with a prefilled message.
 * Built here so the number and the wording live in one place.
 * ========================================================================== */

import { getRef } from "./ref";

/** Digits only, for wa.me. */
export const WHATSAPP_NUMBER = "2347062837954";

/** How the number is written when it's shown to a visitor. */
export const WHATSAPP_DISPLAY = "+234 706 283 7954";

export const WHATSAPP_MESSAGES = {
  audit: "Hi RetenaAI, I'd like a free business audit. My business is: ",
  ads: "Hi RetenaAI, I'd like ad creative for my business: ",
  refer: "Hi RetenaAI, I'd like to refer a business.",
} as const;

export type WhatsAppIntent = keyof typeof WHATSAPP_MESSAGES;

/** "Hi RetenaAI, I saw your MacBite project. I'd like a free audit. My business is: " */
export const caseStudyMessage = (client: string) =>
  `Hi RetenaAI, I saw your ${client} project. I'd like a free audit. My business is: `;

/**
 * wa.me link with the message prefilled.
 *
 * A referral code is appended to the message text because wa.me carries no
 * other field — it's the only way the code reaches the phone. It is therefore
 * visible to the person sending the message.
 */
export function whatsappUrl(message: string): string {
  const ref = getRef();
  const text = ref ? `${message}\n\n(ref: ${ref})` : message;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
