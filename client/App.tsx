import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/lib/language";
import Index from "./pages/waa/Index";
import AboutUs from "./pages/waa/AboutUs";
import ContactUs from "./pages/waa/ContactUs";
import Heule from "./pages/heule/Heule";
import Nrita from "./pages/narita/Nrita";
import NaritaBallNose from "./pages/narita/NaritaBallNose";
import Narita2Flutes from "./pages/narita/Narita2Flutes";
import Narita4Flutes from "./pages/narita/Narita4Flutes";
import HeuleDeburring from "./pages/heule/deburring-tools/HeuleDeburring";
import HeuleCounterboring from "./pages/heule/counterboring/HeuleCounterboring";
import HeuleDrillingCombine from "./pages/heule/drillingcombine/HeuleDrillingCombine";
import HeuleChamfering from "./pages/heule/chamfering/HeuleChamfering";
import CofaDeburring from "./pages/heule/deburring-tools/CofaDeburring";
import Dl2Deburring from "./pages/heule/deburring-tools/Dl2Deburring";
import SNAPChamfering from "./pages/heule/chamfering/SNAPChamFering";
import DefaChamfering from "./pages/heule/chamfering/DEFAChamfering";
import GHKChamfering from "./pages/heule/chamfering/GHKChamfering";
import BSFCounterboring from "./pages/heule/counterboring/BSFCounterboring";
import SoloCounterboring from "./pages/heule/counterboring/SoloCounterboring";
import VEXDrillingCombine from "./pages/heule/drillingcombine/VEXDrillingCombine";
import DCCDrillingCombine from "./pages/heule/drillingcombine/DCCDrillingCombine";
import ModuleLineDrillingCombine from "./pages/heule/drillingcombine/ModuleLineDrillingCombine";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/heule" element={<Heule />} />
            <Route path="/nrita" element={<Nrita />} />
            <Route path="/nrita/ball-nose" element={<NaritaBallNose />} />
            <Route path="/nrita/2-flutes" element={<Narita2Flutes />} />
            <Route path="/nrita/4-flutes" element={<Narita4Flutes />} />
            <Route path="/heule/deburring" element={<HeuleDeburring />} />
            <Route path="/heule/counterboring" element={<HeuleCounterboring />} />
            <Route path="/heule/drilling-combine" element={<HeuleDrillingCombine />} />
            <Route path="/heule/chamfering" element={<HeuleChamfering />} />
            <Route path="/heule/cofa-deburring" element={<CofaDeburring />} />
            <Route path="/heule/dl2-deburring" element={<Dl2Deburring />} />
            <Route path="/heule/snap-chamfering" element={<SNAPChamfering />} />
            <Route path="/heule/defa-chamfering" element={<DefaChamfering />} />
            <Route path="/heule/ghk-chamfering" element={<GHKChamfering />} />
            <Route path="/heule/bsf-counterboring" element={<BSFCounterboring />} />
            <Route path="/heule/solo-counterboring" element={<SoloCounterboring />} />
            <Route path="/heule/vex-drilling-combine" element={<VEXDrillingCombine />} />
            <Route path="/heule/dcc-drilling-combine" element={<DCCDrillingCombine />} />
            <Route path="/heule/module-line-drilling-combine" element={<ModuleLineDrillingCombine />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
