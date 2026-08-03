/* ---------------------------------------------------------------------------
 * TERMS OF SERVICE — TEMPLATE, NOT LEGAL ADVICE
 *
 * Drafted to match the commercial terms in the operating plan: month-to-month,
 * half up front / half on day 15, a written winner definition, and the free-ad
 * trade. It is NOT lawyer-reviewed. Before going live:
 *   1. Fill in LEGAL in src/data/content.ts (entity name, RC number,
 *      governing law). Those feed this page and the footer.
 *   2. Have a Nigerian commercial lawyer review it — particularly the
 *      liability, IP-assignment and governing-law clauses.
 *
 * Governing law defaults to Nigeria. Switch LEGAL.governingLaw to Delaware or
 * Wyoming if you form the US LLC and would rather contract under that.
 * ------------------------------------------------------------------------- */
import { LegalLayout } from "../components/LegalLayout";
import { HAS_REGISTERED_ENTITY, LEGAL, SITE } from "../data/content";
import { usePageMeta } from "../hooks/usePageMeta";

const UPDATED = "3 August 2026";

export function Terms() {
  usePageMeta({
    title: "Terms of Service — RetenaAI",
    description:
      "The terms governing RetenaAI's creative supply engagements — deliverables, payment, ownership, the winner definition, and cancellation.",
  });

  return (
    <LegalLayout
      title="Terms of Service"
      updated={UPDATED}
      intro="These terms govern engagements with RetenaAI. They're written to be read, not to be survived — the commercial points that usually cause arguments in month two are stated explicitly here."
      sections={[
        {
          id: "agreement",
          heading: "1. The agreement",
          body: (
            <>
              {HAS_REGISTERED_ENTITY ? (
                <p>
                  These terms apply between{" "}
                  <strong>{LEGAL.entityName}</strong>, a company registered in
                  Nigeria
                  {LEGAL.rcNumber ? ` (RC ${LEGAL.rcNumber})` : ""}, trading as
                  "RetenaAI" ("we"), and the business engaging our services
                  ("you", "the client"). By confirming an engagement in writing —
                  including by email — you accept these terms.
                </p>
              ) : (
                <p>
                  These terms apply between <strong>RetenaAI</strong> ("we"),
                  operating from Nigeria, and the business engaging our services
                  ("you", "the client"). By confirming an engagement in writing —
                  including by email — you accept these terms.
                </p>
              )}
              <p>
                Where you and we sign a separate written agreement or statement
                of work, that document takes precedence over these terms to the
                extent of any conflict.
              </p>
            </>
          ),
        },
        {
          id: "services",
          heading: "2. What we deliver",
          body: (
            <>
              <p>
                We supply advertising creative concepts on a recurring monthly
                basis. Your tier determines the volume. A standard engagement
                includes:
              </p>
              <ul>
                <li>
                  The agreed number of net-new concepts each month, delivered in
                  weekly batches on Mondays.
                </li>
                <li>
                  Hook variants on qualifying winning creatives, at no
                  additional cost, delivered within 48 hours of qualification.
                </li>
                <li>A written one-page log at the end of each month.</li>
              </ul>
              <p>
                <strong>What we do not do:</strong> we do not manage your ad
                account, set budgets, run tests, or make media-buying decisions.
                We supply the creative; you run it.
              </p>
            </>
          ),
        },
        {
          id: "winner",
          heading: "3. Definition of a winning creative",
          body: (
            <>
              <p>
                Free hook variants are earned, not promised in advance. A
                creative qualifies when it:
              </p>
              <ul>
                <li>
                  beats your account's rolling 30-day average CPA or ROAS; and
                </li>
                <li>
                  does so over a period of <strong>at least 3 days</strong> and{" "}
                  <strong>at least $300 of spend</strong>.
                </li>
              </ul>
              <p>
                Up to <strong>two</strong> qualifying creatives per calendar
                month receive free variants. Qualification is assessed from the
                performance data you share with us; where no data is shared, no
                creative can qualify.
              </p>
            </>
          ),
        },
        {
          id: "free-ad",
          heading: "4. The free ad",
          body: (
            <>
              <p>
                Where we offer to produce one advertising concept at no charge,
                the offer is conditional. In accepting it you agree to:
              </p>
              <ul>
                <li>
                  run the creative for <strong>7 days</strong> against your
                  current best-performing ad; and
                </li>
                <li>
                  share the resulting performance figures with us, including an
                  Ads Manager screenshot.
                </li>
              </ul>
              <p>
                There is no obligation to purchase anything afterwards, and no
                charge if the creative underperforms. The offer is limited in
                number and may be withdrawn at any time before production
                begins.
              </p>
            </>
          ),
        },
        {
          id: "fees",
          heading: "5. Fees and payment",
          body: (
            <>
              <ul>
                <li>
                  Engagements are <strong>month-to-month with no minimum term</strong>.
                </li>
                <li>
                  <strong>50% of the monthly fee is payable in advance</strong>,
                  and the remaining 50% on day 15 of the service month.
                </li>
                <li>
                  Fees are quoted in US dollars and are exclusive of any
                  applicable taxes, which you are responsible for.
                </li>
                <li>
                  Founding rates, where offered, are limited to the first three
                  clients, are conditional on sharing performance data and
                  providing a testimonial, and are locked for six months from
                  the engagement start date.
                </li>
                <li>
                  Delivery may be paused where an invoice remains unpaid more
                  than <strong>7 days</strong> past its due date.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "cancellation",
          heading: "6. Cancellation",
          body: (
            <p>
              Either party may end the engagement by giving written notice
              before the next service month begins. We will complete and deliver
              everything already paid for in the current month. Fees for a month
              already underway are not refundable, since production for that
              month is already committed.
            </p>
          ),
        },
        {
          id: "ownership",
          heading: "7. Ownership and licences",
          body: (
            <>
              <p>
                <strong>Your material.</strong> You retain all rights in the
                brand assets, product imagery, copy and data you provide. You
                grant us a licence to use them for the sole purpose of producing
                your creative.
              </p>
              <p>
                <strong>Delivered concepts.</strong> On full payment for the
                month in which they were delivered, we assign to you all rights
                we hold in the final delivered creative and grant you an
                unrestricted, perpetual, worldwide licence to use it in your own
                advertising. Because the work is produced with generative tools,
                some elements may not attract copyright protection in every
                jurisdiction; we assign whatever rights subsist and place no
                restriction on your use either way. Working files, scripts and
                internal research methods remain ours.
              </p>
              <p>
                <strong>Portfolio use.</strong> We may display delivered
                creative as a work sample. We will not publish your performance
                data or present results as a case study without your express
                written permission, and you may choose to be anonymised.
              </p>
              <p>
                <strong>Your responsibility.</strong> You are responsible for
                ensuring anything you run complies with advertising law and the
                policies of the platform you run it on, including any claims
                about your products. You should review every creative before it
                goes live.
              </p>
            </>
          ),
        },
        {
          id: "ai",
          heading: "8. Use of generative tools",
          body: (
            <p>
              Our creative is produced using a combination of generative AI
              tools and human direction. Delivered creative does not depict real
              customers, and any person appearing in it is synthetic unless we
              tell you otherwise in writing. Where a platform or jurisdiction
              requires AI-generated content to be disclosed, you are responsible
              for making that disclosure when you run the ad.
            </p>
          ),
        },
        {
          id: "no-guarantee",
          heading: "9. No guarantee of results",
          body: (
            <p>
              We supply creative volume. We do not, and cannot, guarantee
              advertising performance, sales, return on ad spend, or that any
              particular creative will win. Benchmark figures referenced on this
              website come from published third-party research and describe the
              market generally — they are not a forecast of your results. Your
              results depend on your product, offer, audience, budget and
              account management, none of which we control.
            </p>
          ),
        },
        {
          id: "confidentiality",
          heading: "10. Confidentiality",
          body: (
            <p>
              Each party will keep the other's non-public information
              confidential and use it only for the purposes of the engagement.
              This obligation continues for 3 years after the engagement ends.
              It does not apply to information that is or becomes public through
              no fault of the receiving party, or that must be disclosed by law.
            </p>
          ),
        },
        {
          id: "liability",
          heading: "11. Liability",
          body: (
            <>
              <p>
                Nothing in these terms limits liability for death or personal
                injury caused by negligence, for fraud, or for anything else
                that cannot lawfully be limited.
              </p>
              <p>
                Subject to that, our total aggregate liability arising out of the
                engagement is limited to{" "}
                <strong>the fees you paid us in the 3 months</strong> before the
                event giving rise to the claim. Neither party is liable for
                indirect or consequential loss, loss of profit, loss of revenue,
                or loss of anticipated savings.
              </p>
            </>
          ),
        },
        {
          id: "changes",
          heading: "12. Changes to these terms",
          body: (
            <p>
              We may update these terms. Changes affecting an active engagement
              take effect from the start of your next service month, and we'll
              tell you by email before they apply.
            </p>
          ),
        },
        {
          id: "law",
          heading: "13. Governing law",
          body: (
            <p>
              These terms are governed by the laws of{" "}
              <strong>{LEGAL.governingLaw}</strong>, and the courts of{" "}
              <strong>{LEGAL.governingLaw}</strong> have exclusive jurisdiction
              over any dispute arising from them.
            </p>
          ),
        },
        {
          id: "contact",
          heading: "14. Contact",
          body: (
            <p>
              Questions about these terms:{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
