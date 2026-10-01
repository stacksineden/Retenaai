import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Landing } from "./pages/Landing";
import { Work } from "./pages/Work";
import { CaseStudy } from "./pages/CaseStudy";
import { Home as CreativeHome } from "./pages/Home";
import { Pricing } from "./pages/Pricing";
import { FreeAd } from "./pages/FreeAd";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { Implementations } from "./pages/Implementations";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        {/* The Nigerian site */}
        <Route path="/" element={<Landing />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<CaseStudy />} />

        {/* The creative-supply site for international brands.
            Stage 4 moves its remaining routes under /creative and adds redirects. */}
        <Route path="/creative" element={<CreativeHome />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/free-ad" element={<FreeAd />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        {/* Unlisted — never link to this from the main site. */}
        <Route path="/implementations" element={<Implementations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
