import { CheckCircle2, Mail, Clock, Users, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const PackageConfirmed = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-white/5 border border-white/10 rounded-2xlrounded-xl shadow-lg max-w-2xl w-full p-8 text-center space-y-8">
        {/* Success Icon */}
        <div className="flex justify-center">
          <CheckCircle2 className="w-16 h-16 text-green-600" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-white">Payment Successful 🎉</h1>
        <p className="text-gray-300">
          Thank you for purchasing your <strong>AI Ads Creative Package</strong>
          . Here’s what happens next to ensure your content is delivered
          smoothly.
        </p>

        {/* Next Steps */}
        <div className="text-left space-y-5">
          {/* Payment Confirmed */}
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-500 mt-1" />
            <p className="text-white">
              Your payment has been <strong>successfully received</strong>.
            </p>
          </div>

          {/* WhatsApp Communication */}
          <div className="flex items-start gap-3">
            <Users className="w-6 h-6 text-purple-500 mt-1" />
            <p className="text-white">
              You will be <strong>added to our WhatsApp channel</strong> using
              the number you provided. This ensures you receive timely updates
              on your creative process and can communicate your preferences
              directly.
            </p>
          </div>

          {/* Email Contact */}
          <div className="flex items-start gap-3">
            <Mail className="w-6 h-6 text-red-500 mt-1" />
            <p className="text-white">
              For any immediate questions, reach out to us via email at{" "}
              <a
                href="mailto:retenaaistacksorg@gmail.com"
                className="text-blue-600 underline"
              >
                retenaaistacksorg@gmail.com
              </a>
              . We’ll respond promptly to ensure clarity on your project.
            </p>
          </div>

          {/* Drive Access */}
          <div className="flex items-start gap-3">
            <Folder className="w-6 h-6 text-blue-500 mt-1" />
            <p className="text-white">
              Your creatives will be uploaded to the{" "}
              <strong>Google Drive link</strong> you provided. You can access
              them once ready within the agreed delivery window.
            </p>
          </div>

          {/* Timeline */}
          <div className="flex items-start gap-3">
            <Clock className="w-6 h-6 text-yellow-500 mt-1" />
            <p className="text-white">
              Delivery timelines depend on your chosen package, but you will
              receive updates throughout the process to keep you informed.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-6">
          <Button
            onClick={() => (window.location.href = "/")}
            className=" px-6 py-3 text-lg bg-[#FCA311] text-black hover:bg-[#E5E5E5] font-semibold"
          >
            Back to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PackageConfirmed;
