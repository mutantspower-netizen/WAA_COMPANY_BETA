import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Heule from "./pages/Heule";
import Nrita from "./pages/Nrita";
import NaritaBallNose from "./pages/NaritaBallNose";
import Narita2Flutes from "./pages/Narita2Flutes";
import Narita4Flutes from "./pages/Narita4Flutes";
import HeuleDeburring from "./pages/HeuleDeburring";
import HeuleCounterboring from "./pages/HeuleCounterboring";
import HeuleDrillingCombine from "./pages/HeuleDrillingCombine";
import HeuleChamfering from "./pages/HeuleChamfering";
import CofaDeburring from "./pages/CofaDeburring";
import Dl2Deburring from "./pages/Dl2Deburring";
import SNAPChamfering from "./pages/SNAPChamFering";
import DefaChamfering from "./pages/DEFAChamfering";
import GHKChamfering from "./pages/GHKChamfering";
import BSFCounterboring from "./pages/BSFCounterboring";
import SoloCounterboring from "./pages/SoloCounterboring";
import VEXDrillingCombine from "./pages/VEXDrillingCombine";
import DCCDrillingCombine from "./pages/DCCDrillingCombine";
import ModuleLineDrillingCombine from "./pages/ModuleLineDrillingCombine";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";
import { i } from "node_modules/vite/dist/node/chunks/moduleRunnerTransport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
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
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
