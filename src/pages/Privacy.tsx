/* ---------------------------------------------------------------------------
 * PRIVACY POLICY — TEMPLATE, NOT LEGAL ADVICE
 *
 * This is a solid, honest starting draft that reflects how RetenaAI actually
 * operates. It is NOT a lawyer-reviewed document. Before you go live:
 *   1. Fill in LEGAL in src/data/content.ts (entity name, registered address,
 *      RC number). Those three feed this page, the Terms and the footer.
 *   2. Have a Nigerian commercial lawyer review it. Three questions worth
 *      asking specifically: whether UK/EU outreach volume requires an Article
 *      27 representative, whether the NDPC classification is right, and
 *      whether a formal DPO is needed or a designated contact will do.
 *
 * Reflects: Nigerian operations, NDPA 2023 as the primary regime, UK/EU GDPR
 * for the outreach and client processing, and the absence of a UK/EU adequacy
 * decision for Nigeria.
 * ------------------------------------------------------------------------- */
import { LegalLayout } from "../components/LegalLayout";
import { HAS_REGISTERED_ENTITY, LEGAL, SITE } from "../data/content";
import { usePageMeta } from "../hooks/usePageMeta";

const UPDATED = "3 August 2026";

export function Privacy() {
  usePageMeta({
    title: "Privacy Policy — RetenaAI",
    description:
      "How RetenaAI collects, uses and protects personal data belonging to prospects, clients and website visitors.",
  });

  return (
    <LegalLayout
      title="Privacy Policy"
      updated={UPDATED}
      intro="This policy explains what personal data RetenaAI collects, why we collect it, how long we keep it, and the choices you have. We've written it in plain English rather than boilerplate."
      sections={[
        {
          id: "who-we-are",
          heading: "1. Who we are",
          body: (
            <>
              <p>
                RetenaAI ("we", "us") provides advertising creative production
                services to direct-to-consumer brands.{" "}
                {HAS_REGISTERED_ENTITY
                  ? "We are a Nigerian company and our operations are based in Nigeria."
                  : "Our operations are based in Nigeria."}
              </p>
              <p>
                We are the <strong>data controller</strong> for the personal
                data described in this policy. Because we process personal data
                in Nigeria, the <strong>Nigeria Data Protection Act 2023</strong>{" "}
                (NDPA) applies to us. Because we offer services to, and contact
                businesses in, the UK and the EU, the <strong>UK GDPR</strong>{" "}
                and <strong>EU GDPR</strong> also apply to the relevant
                processing.
              </p>
              {HAS_REGISTERED_ENTITY ? (
                <p>
                  Registered entity: <strong>{LEGAL.entityName}</strong>
                  <br />
                  Registered address: <strong>{LEGAL.registeredAddress}</strong>
                  {LEGAL.rcNumber && (
                    <>
                      <br />
                      RC number: <strong>{LEGAL.rcNumber}</strong>
                    </>
                  )}
                  <br />
                  Contact: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </p>
              ) : (
                <p>
                  Contact: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </p>
              )}
            </>
          ),
        },
        {
          id: "what-we-collect",
          heading: "2. What we collect",
          body: (
            <>
              <p>We collect only what we need to run the business:</p>
              <ul>
                <li>
                  <strong>Contact details</strong> — name, work email address,
                  brand or company name, and job role. Provided by you when you
                  email us, or collected from publicly available business
                  sources when we research prospective clients.
                </li>
                <li>
                  <strong>Commercial details</strong> — approximate monthly
                  advertising spend, creative volume, and who manages the ad
                  account. Used to size the engagement and quote the right tier.
                </li>
                <li>
                  <strong>Client performance data</strong> — where a client
                  chooses to share campaign metrics or grants read-only ad
                  account access, we process that data solely to inform creative
                  decisions and produce the monthly log.
                </li>
                <li>
                  <strong>Correspondence</strong> — the content of emails and
                  messages exchanged with us.
                </li>
                <li>
                  <strong>Basic website analytics</strong> — aggregated,
                  non-identifying usage data such as pages viewed and referring
                  source. <em>[Update this if you install an analytics tool —
                  name the tool and link its policy.]</em>
                </li>
              </ul>
              <p>
                We do not knowingly collect special category data, financial
                account details, or data relating to children.
              </p>
            </>
          ),
        },
        {
          id: "prospect-data",
          heading: "3. Business contact data and outreach",
          body: (
            <>
              <p>
                We contact businesses about our services using publicly listed
                business contact details. We rely on{" "}
                <strong>legitimate interests</strong> as our lawful basis for
                this business-to-business outreach, having weighed it against
                the recipient's rights and interests.
              </p>
              <p>
                Every message we send identifies who we are and includes a way
                to opt out. If you ask us to stop, we stop and we add your
                details to a suppression list so we don't contact you again.
                One reply is enough — you never need to ask twice.
              </p>
            </>
          ),
        },
        {
          id: "why",
          heading: "4. Why we process it, and our lawful basis",
          body: (
            <ul>
              <li>
                <strong>To respond to enquiries and provide services</strong> —
                performance of a contract, or steps taken at your request before
                entering one.
              </li>
              <li>
                <strong>To produce and improve creative work</strong> —
                legitimate interests in delivering and refining the service we
                were engaged to provide.
              </li>
              <li>
                <strong>To contact prospective business clients</strong> —
                legitimate interests in marketing a business service to relevant
                businesses.
              </li>
              <li>
                <strong>To publish results as a case study</strong> —{" "}
                <strong>consent only</strong>. We ask before publishing anything
                identifiable, and you may choose to be anonymised or to decline
                entirely. Consent can be withdrawn at any time.
              </li>
              <li>
                <strong>To meet legal, tax and accounting duties</strong> —
                compliance with a legal obligation.
              </li>
            </ul>
          ),
        },
        {
          id: "sharing",
          heading: "5. Who we share it with",
          body: (
            <>
              <p>
                We do not sell personal data. We share it only with service
                providers who help us operate, each bound by confidentiality and
                data-processing terms:
              </p>
              <ul>
                <li>Email, storage and collaboration providers</li>
                <li>Payment and invoicing providers</li>
                <li>
                  Contractors and team members who work on your creative, under
                  written confidentiality obligations
                </li>
                <li>
                  Professional advisers, or authorities where we are legally
                  required to disclose
                </li>
              </ul>
              <p>
                <em>
                  [List your actual providers here once tooling is finalised —
                  e.g. Google Workspace, Stripe. Naming them is best practice
                  and increasingly expected.]
                </em>
              </p>
            </>
          ),
        },
        {
          id: "transfers",
          heading: "6. International transfers",
          body: (
            <>
              <p>
                We operate from Nigeria. Personal data we collect is processed
                in Nigeria and, where our providers are located elsewhere, in
                the countries where those providers operate.
              </p>
              <p>
                Nigeria is not currently the subject of a UK or EU adequacy
                decision. Where personal data is transferred from the UK or EEA
                to us, we rely on appropriate safeguards — the{" "}
                <strong>UK International Data Transfer Agreement</strong> or the{" "}
                <strong>EU Standard Contractual Clauses</strong> — together with
                any additional measures required. Clients who need a copy of the
                relevant transfer terms can request them at{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
              </p>
            </>
          ),
        },
        {
          id: "retention",
          heading: "7. How long we keep it",
          body: (
            <ul>
              <li>
                <strong>Prospect contact data</strong> — up to 24 months from
                last meaningful contact, then deleted.
              </li>
              <li>
                <strong>Suppression list entries</strong> — kept indefinitely,
                because that is the only way to guarantee we don't contact you
                again.
              </li>
              <li>
                <strong>Client records and correspondence</strong> — for the
                duration of the engagement plus 6 years, to meet tax and
                accounting requirements.
              </li>
              <li>
                <strong>Client performance data</strong> — deleted or returned
                within 90 days of the engagement ending, unless you ask us to
                keep it.
              </li>
            </ul>
          ),
        },
        {
          id: "rights",
          heading: "8. Your rights",
          body: (
            <>
              <p>
                Depending on where you live, you may have the right to access a
                copy of your data, correct it, delete it, restrict or object to
                how we use it, port it elsewhere, or withdraw consent you
                previously gave. We do not use your data for automated
                decision-making or profiling that produces legal effects.
              </p>
              <p>
                To exercise any of these, email{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. We respond
                within one month and we don't charge for it.
              </p>
              <p>
                If you're in the UK you can complain to the Information
                Commissioner's Office (ico.org.uk). In the EU, your local
                supervisory authority. We'd rather you raised it with us first
                so we can fix it.
              </p>
              <p>
                If you are in Nigeria, you may lodge a complaint with the{" "}
                <strong>Nigeria Data Protection Commission</strong> (ndpc.gov.ng).
              </p>
            </>
          ),
        },
        {
          id: "security",
          heading: "9. Security",
          body: (
            <p>
              We use access controls, reputable providers, and least-privilege
              access to client ad accounts — read-only wherever read-only is
              enough. No system is perfectly secure, but we limit what we hold
              and who can reach it. If a breach affects your rights, we will
              notify you and the relevant regulator as required by law.
            </p>
          ),
        },
        {
          id: "cookies",
          heading: "10. Cookies",
          body: (
            <p>
              This website does not set advertising or tracking cookies. If that
              changes — for example if we add analytics or a booking widget — we
              will update this policy and, where required, ask for your consent
              first.{" "}
              <em>
                [Revisit this section the moment you add any third-party script.]
              </em>
            </p>
          ),
        },
        {
          id: "changes",
          heading: "11. Changes to this policy",
          body: (
            <p>
              We update this policy when our practices change. The date at the
              top always reflects the current version. Material changes affecting
              existing clients will be communicated by email.
            </p>
          ),
        },
        {
          id: "contact",
          heading: "12. Contact",
          body: (
            <p>
              Questions about this policy or about how we handle your data:{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
