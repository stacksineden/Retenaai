import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, Check, Loader2 } from "lucide-react";
import { FORM } from "../data/forms";
import { SITE } from "../data/content";
import { NEED_OPTIONS, type NeedOption } from "../data/implementations";

const EASE = [0.16, 1, 0.3, 1] as const;

type Fields = {
  name: string;
  business: string;
  whatsapp: string;
  problem: string;
};

type Status = "idle" | "submitting" | "success" | "error";

/** Accepts "+234 803 123 4567", "08031234567", "(080) 3123-4567"… */
const looksLikePhone = (v: string) =>
  /^[+\d][\d\s()-]*$/.test(v.trim()) && v.replace(/\D/g, "").length >= 7;

/**
 * Enquiry form for /implementations. No email field — replies go to WhatsApp.
 * `need` is controlled by the page so a package card's "Get a quote" can
 * preselect it.
 */
export function ImplementationsForm({
  need,
  onNeedChange,
}: {
  need: NeedOption | null;
  onNeedChange: (v: NeedOption) => void;
}) {
  const [fields, setFields] = useState<Fields>({
    name: "",
    business: "",
    whatsapp: "",
    problem: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields | "need", string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  const set = (key: keyof Fields, value: string) => {
    setFields((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: typeof errors = {};
    if (!fields.name.trim()) next.name = "What should we call you?";
    if (!fields.business.trim()) next.business = "Which business is this for?";
    if (!need) next.need = "Pick whichever is closest — “Not sure yet” is fine.";
    if (!fields.whatsapp.trim()) next.whatsapp = "We reply on WhatsApp, so we need a number.";
    else if (!looksLikePhone(fields.whatsapp)) next.whatsapp = "That doesn't look like a phone number.";
    if (!fields.problem.trim()) next.problem = "A sentence or two is enough.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "submitting" || !validate()) return;

    const payload = {
      subject: "New implementations enquiry — RetenaAI",
      from_name: "RetenaAI website",
      interest: "implementations",
      name: fields.name,
      business_name: fields.business,
      closest_to_what_you_need: need,
      whatsapp: fields.whatsapp,
      whats_not_working: fields.problem,
    };

    // No form key configured — hand off to the mail client with everything filled in.
    if (!FORM.ACCESS_KEY) {
      const body = Object.entries(payload)
        .filter(([k]) => k !== "subject" && k !== "from_name")
        .map(([k, v]) => `${k.replace(/_/g, " ")}: ${v}`)
        .join("\n");
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
        payload.subject
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("submitting");
    setServerError("");
    try {
      const res = await fetch(FORM.ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: FORM.ACCESS_KEY, ...payload }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Submission failed");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="rounded-3xl bg-navy p-9 text-center shadow-premium sm:p-12"
      >
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full gradient-amber text-ink">
          <Check size={24} strokeWidth={3} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-white">
          Got it. That's with us.
        </h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/60">
          We'll look at what you sent and reply on WhatsApp with what we'd build
          and a quote. Usually the same day.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-navy/10 bg-white p-7 shadow-premium sm:p-9"
    >
      <div className="space-y-6">
        <Field id="name" label="Your name" error={errors.name}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={(e) => set("name", e.target.value)}
            className={inputClass(!!errors.name)}
          />
        </Field>

        <Field id="business" label="Business name" error={errors.business}>
          <input
            id="business"
            type="text"
            autoComplete="organization"
            value={fields.business}
            onChange={(e) => set("business", e.target.value)}
            className={inputClass(!!errors.business)}
          />
        </Field>

        <fieldset>
          <legend className="text-sm font-medium text-navy">Closest to what you need</legend>
          <div
            role="radiogroup"
            aria-label="Closest to what you need"
            className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2"
          >
            {NEED_OPTIONS.map((opt) => {
              const active = need === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => {
                    onNeedChange(opt);
                    setErrors((e) => ({ ...e, need: undefined }));
                  }}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors focus-ring ${
                    active
                      ? "border-amber bg-amber/10 text-navy"
                      : "border-navy/15 text-navy/65 hover:border-navy/30 hover:text-navy"
                  }`}
                >
                  <span
                    className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border ${
                      active ? "border-amber" : "border-navy/25"
                    }`}
                  >
                    {active && <span className="h-2 w-2 rounded-full bg-amber" />}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>
          {errors.need && <ErrorText>{errors.need}</ErrorText>}
        </fieldset>

        <Field id="whatsapp" label="WhatsApp number" error={errors.whatsapp}>
          <input
            id="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+234 …"
            value={fields.whatsapp}
            onChange={(e) => set("whatsapp", e.target.value)}
            className={inputClass(!!errors.whatsapp)}
          />
        </Field>

        <Field id="problem" label="What's not working" error={errors.problem}>
          <textarea
            id="problem"
            rows={4}
            value={fields.problem}
            onChange={(e) => set("problem", e.target.value)}
            placeholder="Where do people get stuck, or where do you lose them?"
            className={`${inputClass(!!errors.problem)} resize-y`}
          />
        </Field>
      </div>

      {status === "error" && (
        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <p>
            That didn't send — {serverError || "please try again"}. You can also
            email us at{" "}
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
            Send it over
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}

function inputClass(invalid: boolean) {
  // 16px on mobile stops iOS Safari zooming into the field.
  return `w-full rounded-xl border bg-white px-4 py-3 text-base sm:text-sm text-navy transition-colors placeholder:text-navy/30 focus-ring ${
    invalid ? "border-red-400" : "border-navy/15 hover:border-navy/30"
  }`;
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-navy">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ children }: { children: ReactNode }) {
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
      <AlertCircle size={12} />
      {children}
    </p>
  );
}
