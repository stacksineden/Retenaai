import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  CalendarCheck,
  Check,
  Loader2,
  Mail,
} from "lucide-react";
import {
  FORM,
  OWNER_OPTIONS,
  PACE_OPTIONS,
  SPEND_BANDS,
} from "../data/forms";
import { SITE } from "../data/content";

const EASE = [0.16, 1, 0.3, 1] as const;

type Status = "idle" | "submitting" | "success" | "error";

/**
 * "sent" — it reached us. "handoff" — no access key configured, so we opened
 * their mail client and they still have to press send. The two states must say
 * different things: claiming we've received something we haven't is the worst
 * possible first impression.
 */
type SuccessMode = "sent" | "handoff";

type Fields = {
  brand: string;
  email: string;
  spend: string;
  pace: string;
  owner: string;
  notes: string;
};

const EMPTY: Fields = {
  brand: "",
  email: "",
  spend: "",
  pace: "",
  owner: "",
  notes: "",
};

const labelFor = (
  options: readonly { value: string; label: string }[],
  value: string
) => options.find((o) => o.value === value)?.label ?? value;

export function LeadForm() {
  // The pricing calculator links here with ?spend=&pace= so the two questions
  // they already answered arrive pre-selected.
  const [params] = useSearchParams();

  const [fields, setFields] = useState<Fields>({
    ...EMPTY,
    spend: params.get("spend") ?? "",
    pace: params.get("pace") ?? "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [successMode, setSuccessMode] = useState<SuccessMode>("sent");
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [serverError, setServerError] = useState("");

  const set = (key: keyof Fields, value: string) => {
    setFields((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.brand.trim()) next.brand = "We need to know which brand this is.";
    if (!fields.email.trim()) {
      next.email = "We need somewhere to send the ad.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      next.email = "That doesn't look like a valid email address.";
    }
    if (!fields.spend) next.spend = "Pick the closest band.";
    if (!fields.pace) next.pace = "Pick the closest band.";
    if (!fields.owner) next.owner = "Pick whichever is closest.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  /** No access key configured yet — hand off to the mail client instead. */
  const mailtoFallback = () => {
    const body = [
      `Brand / website: ${fields.brand}`,
      `Monthly Meta spend: ${labelFor(SPEND_BANDS, fields.spend)}`,
      `New creatives per week: ${labelFor(PACE_OPTIONS, fields.pace)}`,
      `Who runs the account: ${labelFor(OWNER_OPTIONS, fields.owner)}`,
      "",
      fields.notes ? `Notes: ${fields.notes}` : "",
    ].join("\n");

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      FORM.SUBJECT
    )}&body=${encodeURIComponent(body)}`;
    setSuccessMode("handoff");
    setStatus("success");
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    if (!validate()) return;

    if (!FORM.ACCESS_KEY) {
      mailtoFallback();
      return;
    }

    setStatus("submitting");
    setServerError("");

    try {
      const res = await fetch(FORM.ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: FORM.ACCESS_KEY,
          subject: FORM.SUBJECT,
          from_name: "RetenaAI website",
          // Human-readable labels so the email is readable at a glance.
          brand: fields.brand,
          email: fields.email,
          monthly_meta_spend: labelFor(SPEND_BANDS, fields.spend),
          new_creatives_per_week: labelFor(PACE_OPTIONS, fields.pace),
          who_runs_the_account: labelFor(OWNER_OPTIONS, fields.owner),
          notes: fields.notes || "—",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Submission failed");
      }
      setSuccessMode("sent");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  };

  if (status === "success") {
    return (
      <SuccessState
        mode={successMode}
        belowMinimum={fields.spend === "under-20k"}
      />
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-navy/10 bg-white p-7 shadow-premium sm:p-9"
    >
      <div className="space-y-6">
        <Field
          id="brand"
          label="Brand or website"
          error={errors.brand}
          hint="So we can pull your ads from the library before we reply."
        >
          <input
            id="brand"
            type="text"
            autoComplete="organization"
            value={fields.brand}
            onChange={(e) => set("brand", e.target.value)}
            placeholder="yourbrand.com"
            className={inputClass(!!errors.brand)}
          />
        </Field>

        <Field id="email" label="Work email" error={errors.email}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="you@yourbrand.com"
            className={inputClass(!!errors.email)}
          />
        </Field>

        <Field
          id="spend"
          label="Monthly Meta spend"
          error={errors.spend}
          hint="Used to size your creative volume — roughly one new ad per $3,000."
        >
          <Select
            id="spend"
            value={fields.spend}
            onChange={(v) => set("spend", v)}
            options={SPEND_BANDS}
            placeholder="Select a band"
            invalid={!!errors.spend}
          />
        </Field>

        <Field
          id="pace"
          label="New creatives you launch per week"
          error={errors.pace}
        >
          <Select
            id="pace"
            value={fields.pace}
            onChange={(v) => set("pace", v)}
            options={PACE_OPTIONS}
            placeholder="Select a band"
            invalid={!!errors.pace}
          />
        </Field>

        <Field
          id="owner"
          label="Who runs the ad account day to day?"
          error={errors.owner}
        >
          <Select
            id="owner"
            value={fields.owner}
            onChange={(v) => set("owner", v)}
            options={OWNER_OPTIONS}
            placeholder="Select one"
            invalid={!!errors.owner}
          />
        </Field>

        <Field id="notes" label="Anything else?" optional>
          <textarea
            id="notes"
            rows={3}
            value={fields.notes}
            onChange={(e) => set("notes", e.target.value)}
            placeholder="Optional — the angle you'd most like tested, or what's not working."
            className={`${inputClass(false)} resize-y`}
          />
        </Field>
      </div>

      {/* Honest note rather than a silent disqualification. */}
      {fields.spend === "under-20k" && (
        <motion.p
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="mt-6 rounded-2xl bg-navy-50 p-4 text-xs leading-relaxed text-navy/60"
        >
          Worth being upfront: under $20k/month you probably don't have the
          budget to give enough creative a fair test, so this usually isn't
          worth your money yet. Send it anyway if you'd like — we'll tell you
          honestly what we'd do in your position.
        </motion.p>
      )}

      {status === "error" && (
        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <p>
            That didn't send — {serverError || "please try again"}. You can also
            email us directly at{" "}
            <a href={`mailto:${SITE.email}`} className="font-semibold underline">
              {SITE.email}
            </a>
            .
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 text-sm font-semibold text-white shadow-premium transition-all hover:-translate-y-0.5 hover:bg-navy-700 disabled:cursor-not-allowed disabled:opacity-70 focus-ring"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Claim the free ad
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </>
        )}
      </button>

      <p className="mt-4 text-center text-[11px] leading-relaxed text-navy/40">
        No payment details, no contract. We reply from a real inbox, usually the
        same day. Your details are only ever used to respond — see our{" "}
        <a
          href="/privacy"
          className="underline decoration-navy/20 underline-offset-2 hover:text-navy/60"
        >
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}

function inputClass(invalid: boolean) {
  // text-base on mobile is deliberate: iOS Safari zooms the whole page when a
  // focused input is under 16px. Drops back to 14px from sm up.
  return `w-full rounded-xl border bg-white px-4 py-3 text-base sm:text-sm text-navy transition-colors placeholder:text-navy/30 focus-ring ${
    invalid
      ? "border-red-400 focus-visible:outline-red-400"
      : "border-navy/15 hover:border-navy/30"
  }`;
}

function Field({
  id,
  label,
  error,
  hint,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-baseline justify-between gap-3 text-sm font-medium text-navy"
      >
        {label}
        {optional && (
          <span className="text-xs font-normal text-navy/35">Optional</span>
        )}
      </label>
      {hint && <p className="mt-1 text-xs text-navy/45">{hint}</p>}
      <div className="mt-2">{children}</div>
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}

function Select({
  id,
  value,
  onChange,
  options,
  placeholder,
  invalid,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly { value: string; label: string }[];
  placeholder: string;
  invalid: boolean;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputClass(invalid)} appearance-none pr-10 ${
          value ? "text-navy" : "text-navy/40"
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <span
        aria-hidden
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-navy/40"
      >
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}

function SuccessState({
  mode,
  belowMinimum,
}: {
  mode: SuccessMode;
  belowMinimum: boolean;
}) {
  // No confirmation email goes out automatically, so this screen must never
  // tell them to check their inbox — it says what actually happens next.
  const heading =
    mode === "handoff"
      ? "Almost — send that email."
      : "Got it. That's with us.";

  const body =
    mode === "handoff"
      ? "We've opened your mail app with all your answers filled in. Press send and it's with us — then we'll review it and come straight back to you."
      : belowMinimum
        ? "We review every one of these by hand. We'll come back to you honestly about whether this is worth doing at your current spend, and what we'd do in your position. Usually the same day."
        : "We'll review it on our end straight away — pulling your ads from the Meta library and picking the angle already working hardest for you. Then we come back to you with exactly what we'd build and what happens next. Usually the same day.";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="rounded-3xl bg-navy p-9 text-center shadow-premium sm:p-12"
    >
      <motion.span
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        className="mx-auto grid h-14 w-14 place-items-center rounded-full gradient-amber text-ink"
      >
        {mode === "handoff" ? (
          <Mail size={22} strokeWidth={2.5} />
        ) : (
          <Check size={24} strokeWidth={3} />
        )}
      </motion.span>

      <h3 className="mt-6 font-display text-2xl font-semibold text-white">
        {heading}
      </h3>

      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/60">
        {body}
      </p>

      {FORM.BOOKING_URL && mode === "sent" && (
        <div className="mt-8">
          <p className="text-xs uppercase tracking-wider text-amber">
            Want to skip the back-and-forth?
          </p>
          <a
            href={FORM.BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-semibold text-ink shadow-amber-glow transition-all hover:-translate-y-0.5 hover:bg-amber-400 focus-ring"
          >
            <CalendarCheck size={16} />
            Book 15 minutes
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      )}
    </motion.div>
  );
}
