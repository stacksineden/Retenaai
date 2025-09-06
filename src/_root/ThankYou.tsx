import { CheckCircle2, BookOpen, Users, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full p-8 text-center space-y-8">
        {/* Success Icon */}
        <div className="flex justify-center">
          <CheckCircle2 className="w-16 h-16 text-green-600" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900">
          Payment Successful 🎉
        </h1>
        <p className="text-gray-600">
          Thank you for securing your spot in the <strong>AI Photography Masterclass</strong>.  
          We’ve received your payment and you’re officially on board.
        </p>

        {/* Important Notes */}
        <div className="text-left space-y-5">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-500 mt-1" />
            <p className="text-gray-700">
              Your payment has been <strong>received and acknowledged</strong>.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <BookOpen className="w-6 h-6 text-blue-500 mt-1" />
            <p className="text-gray-700">
              You will receive your <strong>Masterclass Handbook</strong> (guidelines + 
              details) in the next <strong>24 hours</strong>.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Users className="w-6 h-6 text-purple-500 mt-1" />
            <p className="text-gray-700">
              You’ll be <strong>added to our WhatsApp Community</strong> where you can 
              connect with fellow learners right away.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-6 h-6 text-red-500 mt-1" />
            <p className="text-gray-700">
              For any questions, reach out to us via <strong>email</strong> and 
              we’ll take it up from there.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-yellow-500 mt-1" />
            <p className="text-gray-700">
              All payments made to <strong>Stacksineden Inc.</strong> are valid 
              and secure—no need to worry.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-6">
          <Button
            onClick={() => (window.location.href = "/retenaai-academy")}
            className="shad-button_primary px-6 py-3 text-lg"
          >
            Go to RetenaAI Academy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
