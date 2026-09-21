import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
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
        <Route path="/" element={<Home />} />
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
