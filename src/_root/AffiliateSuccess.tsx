import { useSearchParams } from "react-router-dom";
import { Check, Copy } from "lucide-react";
import { useState, useEffect } from "react";

const AffiliateSuccess = () => {
  const [copied, setCopied] = useState(false);
//   const [copiedLink, setCopiedLink] = useState(false);
  const [params] = useSearchParams();

  /* --------------------------------------------
     1. Load promo code
     -------------------------------------------- */
  const queryCode = params.get("code");
  const storedCode =
    typeof window !== "undefined"
      ? localStorage.getItem("affiliatePromoCode")
      : null;

  const promoCode = queryCode || storedCode || "RETE-0000";

  useEffect(() => {
    if (queryCode) {
      localStorage.setItem("affiliatePromoCode", queryCode);
    }
  }, [queryCode]);

  /* --------------------------------------------
     2. Referral link
     -------------------------------------------- */
//   const referralLink = `${window.location.origin}/?promo=${promoCode}`;

  /* --------------------------------------------
     3. Copy handlers
     -------------------------------------------- */
  const copyCode = async () => {
    await navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

//   const copyReferralLink = async () => {
//     await navigator.clipboard.writeText(referralLink);
//     setCopiedLink(true);
//     setTimeout(() => setCopiedLink(false), 1200);
//   };

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-16 py-16">
      <div className="max-w-4xl mx-auto text-center animate-fadeIn">

        {/* SUCCESS ICON */}
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 rounded-full bg-[#FCA311]/20 flex items-center justify-center animate-pop">
            <Check className="text-[#FCA311]" size={40} />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
          Welcome to the Affiliate Network!
        </h1>

        <p className="text-white/70 max-w-2xl mx-auto mb-10">
          Your affiliate profile has been created successfully.
          Below is your unique promo code. Start sharing and earn instantly.
        </p>

        {/* PROMO CODE CARD */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-lg backdrop-blur-xl mb-10 animate-slideUp">
          <p className="text-lg mb-2">Your Refferal Code</p>

          <div className="flex items-center justify-center gap-3">
            <span className="text-3xl font-extrabold tracking-widest text-[#FCA311]">
              {promoCode}
            </span>

            <button
              onClick={copyCode}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
            >
              {copied ? (
                <Check className="text-green-400" />
              ) : (
                <Copy className="text-white" />
              )}
            </button>
          </div>

          <p className="text-sm text-white/60 mt-4">
            Share this code with anyone buying a RetenaAI package.
            Every valid purchase gives you commission.
          </p>
        </div>

        {/* REFERRAL LINK CARD */}
        {/* <div className="bg-white/5 border border-white/10 p-6 rounded-xl mb-10 animate-slideUp">
          <p className="text-lg font-semibold mb-2">Your Referral Link</p>

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm break-all text-white/80">{referralLink}</span>

            <button
              onClick={copyReferralLink}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
            >
              {copiedLink ? (
                <Check className="text-green-400" />
              ) : (
                <Copy className="text-white" />
              )}
            </button>
          </div>

          <p className="text-xs text-white/50 mt-3">
            Share this link anywhere — any purchase made through it automatically counts for you.
          </p>
        </div> */}

        {/* NEXT STEPS – REPLACES THE DASHBOARD */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-xl text-left max-w-3xl mx-auto animate-slideUp">
          <h3 className="text-xl font-bold mb-4">What To Do Next</h3>

          <ul className="list-disc pl-6 space-y-2 text-white/80">
            <li>Post your code or referral link on WhatsApp, Facebook, TikTok, and Instagram.</li>
            <li>Tell people to use your promo code at checkout to get a discount.</li>
            <li>You earn instantly for every successful purchase they make.</li>
            <li>Save this page or screenshot your code so you never lose it.</li>
            <li>Contact support if you need marketing materials.</li>
          </ul>
        </div>

        {/* CTA */}
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-10 bg-[#FCA311] text-black font-bold px-10 py-4 rounded-xl hover:opacity-90 transition animate-pop"
        >
          Start Sharing Now 🚀
        </button>

      </div>

      {/* ANIMATIONS */}
      <style>{`
        .animate-fadeIn { animation: fadeIn 0.9s ease forwards; }
        .animate-slideUp { animation: slideUp 0.9s ease forwards; }
        .animate-pop { animation: pop 0.4s ease forwards; }

        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) }
          to { opacity: 1; transform: translateY(0) }
        }
        @keyframes pop {
          0% { transform: scale(0.8); opacity: 0 }
          100% { transform: scale(1); opacity: 1 }
        }
      `}</style>
    </section>
  );
};

export default AffiliateSuccess;
