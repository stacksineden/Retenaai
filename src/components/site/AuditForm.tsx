import { useState, type FormEvent, type ReactNode } from "react";
import { AlertCircle, Check, Loader2 } from "lucide-react";
import { FORM as FORM_CONFIG } from "../../data/forms";
import { FORM } from "../../data/home";
import { getRef } from "../../lib/ref";
import { track } from "../../lib/track";
import { WHATSAPP_DISPLAY } from "../../lib/whatsapp";

/**
 * For visitors who'd rather not open WhatsApp. Fields are exactly as the v2
 * copy specifies, including the conditional "Who introduced you?".
 *
 * [FORM_DESTINATION] is unconfirmed — submissions currently go to the
 * Web3Forms inbox already configured in src/data/forms.ts. Change the key
 * there to send them somewhere else.
 */
type Fields = {
  name: string;
  business: string;
  whatsapp: string;
  businessType: string;
  needHelpWith: string;
  heardAbout: string;
  introducedBy: string;
  problem: string;
};

const EMPTY: Fields = {
  name: "",
  business: "",
  whatsapp: "",
  businessType: "",
  needHelpWith: "",
  heardAbout: "",
  introducedBy: "",
  problem: "",
};

const looksLikePhone = (v: string) =>
  /^[+\d][\d\s()-]*$/.test(v.trim()) && v.replace(/\D/g, "").length >= 7;

export function AuditForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (key: keyof Fields, value: string) => {
    setFields((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const introducer = fields.heardAbout === "Someone introduced me";

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = "We need a name.";
    if (!fields.business.trim()) next.business = "Which business is this for?";
    if (!fields.whatsapp.trim()) next.whatsapp = "We reply on WhatsApp, so we need a number.";
    else if (!looksLikePhone(fields.whatsapp)) next.whatsapp = "That doesn't look like a phone number.";
    if (!fields.businessType) next.businessType = "Pick the closest one.";
    if (!fields.needHelpWith) next.needHelpWith = "Pick the closest one.";
    if (!fields.problem.trim()) next.problem = "One line is enough.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending" || !validate()) return;

    setStatus("sending");
    try {
      const res = await fetch(FORM_CONFIG.ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: FORM_CONFIG.ACCESS_KEY,
          subject: "New audit request — RetenaAI",
          from_name: "RetenaAI website",
          name: fields.name,
          business_name: fields.business,
          whatsapp: fields.whatsapp,
          business_type: fields.businessType,
          needs_help_with: fields.needHelpWith,
          heard_about_us: fields.heardAbout || "—",
          introduced_by: introducer ? fields.introducedBy || "—" : "—",
          biggest_problem: fields.problem,
          referral_code: getRef() ?? "—",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error();
      track("form_submit", {
        need: fields.needHelpWith,
        heard: fields.heardAbout,
        business_type: fields.businessType,
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-3xl bg-navy p-8 text-center shadow-premium sm:p-10">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full gradient-amber text-ink">
          <Check size={24} strokeWidth={3} />
        </span>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/80">
          {FORM.success}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-navy/10 bg-white p-6 shadow-premium sm:p-8"
    >
      <div className="space-y-5">
        <Field id="name" label={FORM.fields.name} error={errors.name}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={(e) => set("name", e.target.value)}
            className={inputClass(!!errors.name)}
          />
        </Field>

        <Field id="business" label={FORM.fields.business} error={errors.business}>
          <input
            id="business"
            type="text"
            autoComplete="organization"
            value={fields.business}
            onChange={(e) => set("business", e.target.value)}
            className={inputClass(!!errors.business)}
          />
        </Field>

        <Field id="whatsapp" label={FORM.fields.whatsapp} error={errors.whatsapp}>
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

        <Field id="businessType" label={FORM.fields.businessType} error={errors.businessType}>
          <Select
            id="businessType"
            value={fields.businessType}
            onChange={(v) => set("businessType", v)}
            options={FORM.businessTypes}
            invalid={!!errors.businessType}
          />
        </Field>

        <Field id="needHelpWith" label={FORM.fields.needHelpWith} error={errors.needHelpWith}>
          <Select
            id="needHelpWith"
            value={fields.needHelpWith}
            onChange={(v) => set("needHelpWith", v)}
            options={FORM.needOptions}
            invalid={!!errors.needHelpWith}
          />
        </Field>

        <Field id="heardAbout" label={FORM.fields.heardAbout}>
          <Select
            id="heardAbout"
            value={fields.heardAbout}
            onChange={(v) => set("heardAbout", v)}
            options={FORM.heardOptions}
            invalid={false}
          />
        </Field>

        {introducer && (
          <Field id="introducedBy" label={FORM.fields.introducedBy}>
            <input
              id="introducedBy"
              type="text"
              value={fields.introducedBy}
              onChange={(e) => set("introducedBy", e.target.value)}
              className={inputClass(false)}
            />
          </Field>
        )}

        <Field id="problem" label={FORM.fields.problem} error={errors.problem}>
          <input
            id="problem"
            type="text"
            value={fields.problem}
            onChange={(e) => set("problem", e.target.value)}
            className={inputClass(!!errors.problem)}
          />
        </Field>
      </div>

      {status === "error" && (
        <p className="mt-6 flex items-start gap-2 rounded-2xl bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          {FORM.error} ({WHATSAPP_DISPLAY})
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-navy px-7 text-base font-semibold text-white shadow-premium transition-all hover:-translate-y-0.5 hover:bg-navy-700 disabled:opacity-70 focus-ring"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          FORM.button
        )}
      </button>
    </form>
  );
}

function inputClass(invalid: boolean) {
  // 16px on phones so iOS Safari doesn't zoom when a field is focused.
  return `w-full rounded-xl border bg-white px-4 py-3 text-base text-navy transition-colors placeholder:text-navy/30 focus-ring ${
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
  invalid,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
  invalid: boolean;
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${inputClass(invalid)} appearance-none ${value ? "text-navy" : "text-navy/40"}`}
    >
      <option value="">Choose one</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}
