import { CheckCircle2, Mail, Clock, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const PackageConfirmed = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-white/5 border border-white/10 rounded-2xl shadow-lg max-w-2xl w-full p-8 text-center space-y-8">
        {/* Success Icon */}
        <div className="flex justify-center">
          <CheckCircle2 className="w-16 h-16 text-green-500" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-white">Request Received 🎉</h1>
        <p className="text-gray-300">
          Thanks for telling us about your brand! We've received your{" "}
          <strong>Campaign Pack</strong> request. Here's what happens next.
        </p>

        {/* Next Steps */}
        <div className="text-left space-y-5">
          {/* Confirmation */}
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 shrink-0" />
            <p className="text-white">
              Your details have been <strong>successfully received</strong> — no
              payment has been made yet.
            </p>
          </div>

          {/* Email Contact */}
          <div className="flex items-start gap-3">
            <Mail className="w-6 h-6 text-[#FCA311] mt-1 shrink-0" />
            <p className="text-white">
              We'll review your request and reach out via email shortly with
              next steps and your invoice. Prefer to talk first? Email us at{" "}
              <a
                href="mailto:hello@retenaai.com"
                className="text-lg font-semibold text-[#FCA311] hover:underline"
              >
                hello@retenaai.com
              </a>
              .
            </p>
          </div>

          {/* Assets */}
          <div className="flex items-start gap-3">
            <ImageIcon className="w-6 h-6 text-[#FCA311] mt-1 shrink-0" />
            <p className="text-white">
              If you uploaded a product photo or logo, we've got it — we'll use
              it to start shaping your campaign concept right away.
            </p>
          </div>

          {/* Timeline */}
          <div className="flex items-start gap-3">
            <Clock className="w-6 h-6 text-[#FCA311] mt-1 shrink-0" />
            <p className="text-white">
              Once you confirm and complete the deposit, delivery begins — your
              first draft arrives within 48 hours.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-6">
          <Button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-3 text-lg bg-[#FCA311] text-black hover:bg-[#E5E5E5] font-semibold"
          >
            Back to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PackageConfirmed;
