import { useEffect, lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Billing,
  CreditsBilling,
  Home,
  StudyKits,
  CourseOverview,
  Modules,
  Sessions,
  Assessments,
  FluxLoraGenerate,
  DemoTraining,
  TrainingDatasets,
  LoraTraining,
} from "./_root/pages";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

import { Toaster } from "react-hot-toast";
import SignInForm from "./_auth/forms/SignInForm";
import VerifyAccount from "./_auth/forms/VerifyAccount";
import ForgotPassword from "./_auth/forms/ForgotPassword";
import ResetPassword from "./_auth/forms/ResetPassword";
import { Loader2 } from "lucide-react";
import NotFound from "./_root/NotFound";
import ProgramResources from "./_root/pages/ProgramResources";
import PackagesBillings from "./_root/PackagesBillings";

const Landing = lazy(() => import("./_root/Landing"));
const SolutionPage = lazy(() => import("./_root/Solutions"));
const RootLayout = lazy(() => import("./_root/RootLayout"));
const AuthLayout = lazy(() => import("./_auth/AuthLayout"));
const SignUpForm = lazy(() => import("./_auth/forms/SignUpForm"));
const Pricing = lazy(() => import("./_root/Pricing"));
const ShowCase = lazy(() => import("./_root/ShowCase"));
const Terms = lazy(() => import("./_root/Terms"));
const Enterprise = lazy(() => import("./_root/Enterprise"));
const BrandingRequest = lazy(() => import("./_root/BrandingRequest"));
// const CaseStudyPage = lazy(() => import("./_root/CaseStudy"));
const AcademyPage = lazy(() => import("./_root/Academy"));
const PackagesPage = lazy(() => import("./_root/Packages"));
const ProgramsPage = lazy(() => import("./_root/Programs"));
const ProgramPage = lazy(() => import("./_root/Program"));
const CareerPage = lazy(() => import("./_root/Careers"));
const MasterclassPage = lazy(() => import("./_root/Masterclass"));
const MasterclassBillingPage = lazy(() => import("./_root/Masterclassbilling"));
const ConfirmedPage = lazy(() => import("./_root/Confirmed"));
const PackageConfirmed = lazy(() => import("./_root/PackageConfirmed"));
const AffiliateProgramPage = lazy(() => import("./_root/AffiliateProgram"));
const AffiliateRegisterPage = lazy(() => import("./_root/AffiliateRegister"));
const AffiliateSuccessPage = lazy(() => import("./_root/AffiliateSuccess"));

const App = () => {
  const [showFirstMessage, setShowFirstMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstMessage(!showFirstMessage);
    }, 5000); // Change interval (in milliseconds) as needed
    return () => clearTimeout(timer);
  }, [showFirstMessage]);

  return (
    <>
      <Suspense
        fallback={
          <div className="w-full mx-auto h-screen flex items-center justify-center flex-col gap-2 bg-black">
            <Loader2 className="h-10 md:h-20 w-10 md:w-20 text-white animate-spin" />
            <div className="text-center">
              {showFirstMessage ? (
                <p className="text-base md:text-lg text-white">
                  Hang tight! Our servers are doing some heavy lifting.
                </p>
              ) : (
                <p className="text-base md:text-lg text-white">
                  In the meantime, why not practice your Jedi mind tricks? Try
                  to move the loading spinner with your mind... Almost there...
                </p>
              )}
            </div>
          </div>
        }
      >
        <SkeletonTheme baseColor="white" highlightColor="#525252">
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/app" element={<Home />} />
              <Route path="/course-overview" element={<CourseOverview />} />
              <Route path="/modules" element={<Modules />} />
              <Route path="/interactive-sessions" element={<Sessions />} />
              <Route path="/assessment" element={<Assessments />} />
              {/* <Route path="/generations" element={<FluxRealismGenerate />} /> */}
              {/* <Route
                path="/generations/photo-upscaling"
                element={<Photoupscaling />}
              />
              <Route path="/generations/flux" element={<FluxProGenerate />} /> */}
              <Route
                path="/generations/flux/lora"
                element={<FluxLoraGenerate />}
              />
              <Route path="/demotraining" element={<DemoTraining />} />
              {/* <Route path="/demogenerate" element={<DemoGenerate />} />
              <Route path="/generations-image" element={<ImageGenerate />} />
              <Route path="/generations/bg-remover" element={<BgRemover />} />
              <Route
                path="/generations/image-to-prompt"
                element={<ImageToPrompt />}
              />
              <Route path="/training" element={<LoraTraining />} />
              <Route path="/lora-gallery" element={<LoraGallery />} />
              <Route path="/photo-gallery" element={<PhotoGallery />} />
              <Route
                path="/photoshoot-gallery"
                element={<PhotoshootGallery />}
              /> */}
              <Route path="/training" element={<LoraTraining />} />
              <Route path="/training-dataset" element={<TrainingDatasets />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/credits-billing" element={<CreditsBilling />} />
              <Route path="/study-kits" element={<StudyKits />} />
              <Route path="/program-resources" element={<ProgramResources />} />
            </Route>

            <Route element={<AuthLayout />}>
              <Route path="/sign-up" element={<SignUpForm />} />
              <Route path="/sign-in" element={<SignInForm />} />
              <Route path="/verify-user" element={<VerifyAccount />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
            </Route>

            <Route index element={<Landing />} />
            <Route path="/showcase" element={<ShowCase />} />
            <Route path="/solutions" element={<SolutionPage />} />
            <Route path="/case-study" element={<SolutionPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/contact" element={<BrandingRequest />} />
            <Route path="/retenaai-academy" element={<AcademyPage />} />
            <Route
              path="/retenaai-academy/programs"
              element={<ProgramsPage />}
            />
            <Route path="/retenaai-academy/program" element={<ProgramPage />} />
            <Route
              path="/retenaai-academy/masterclass"
              element={<MasterclassPage />}
            />
            <Route
              path="/retenaai-academy/thank-you"
              element={<ConfirmedPage />}
            />
            <Route path="/package-thank-you" element={<PackageConfirmed />} />

            <Route
              path="/retenaai-academy/masterclass-billing"
              element={<MasterclassBillingPage />}
            />
            <Route
              path="/affiliate-program"
              element={<AffiliateProgramPage />}
            />
            <Route
              path="/affiliate-register"
              element={<AffiliateRegisterPage />}
            />
            <Route
              path="/affiliate-success"
              element={<AffiliateSuccessPage />}
            />

            <Route path="/packages-billing" element={<PackagesBillings />} />

            <Route path="/careers" element={<CareerPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SkeletonTheme>
      </Suspense>
      <Toaster position="top-right" />
    </>
  );
};

export default App;
