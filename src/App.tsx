import { useEffect, lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  BgRemover,
  FluxLoraGenerate,
  FluxProGenerate,
  FluxRealismGenerate,
  Home,
  ImageToPrompt,
  LoraGallery,
  LoraTraining,
  PhotoGallery,
  Photoupscaling,
  TrainingDatasets,
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

const Landing = lazy(() => import("./_root/Landing"));
const RootLayout = lazy(() => import("./_root/RootLayout"));
const AuthLayout = lazy(() => import("./_auth/AuthLayout"));
const SignUpForm = lazy(() => import("./_auth/forms/SignUpForm"));
const Pricing = lazy(() => import("./_root/Pricing"));
const ShowCase = lazy(() => import("./_root/ShowCase"));
const Terms = lazy(() => import("./_root/Terms"));

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
          <div className="w-[90%] mx-auto h-screen flex items-center justify-center flex-col gap-2">
            <Loader2 className="h-10 md:h-20 w-10 md:w-20 text-primary-blue animate-spin" />
            <div className="text-center">
              {showFirstMessage ? (
                <p className="text-base md:text-lg text-zinc-100">
                  Hang tight! Our servers are doing some heavy lifting.
                </p>
              ) : (
                <p className="text-base md:text-lg text-zinc-100">
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
              <Route path="/generations" element={<FluxRealismGenerate />} />
              <Route
                path="/generations/photo-upscaling"
                element={<Photoupscaling />}
              />
              <Route path="/generations/flux" element={<FluxProGenerate />} />
              <Route
                path="/generations/flux/lora"
                element={<FluxLoraGenerate />}
              />
              <Route path="/generations/bg-remover" element={<BgRemover />} />
              <Route
                path="/generations/image-to-prompt"
                element={<ImageToPrompt />}
              />
              <Route path="/training" element={<LoraTraining />} />
              <Route path="/lora-gallery" element={<LoraGallery />} />
              <Route path="/photo-gallery" element={<PhotoGallery />} />
              <Route path="/training-dataset" element={<TrainingDatasets />} />
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
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SkeletonTheme>
      </Suspense>
      <Toaster position="top-right" />
    </>
  );
};

export default App;
