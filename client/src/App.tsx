import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VisitorPage from "./pages/Visitor";
import CityServicesPage from "./pages/CityServices";
import ShareFeedbackPage from "./pages/ShareFeedback";
import NewsArticlePage from "./pages/NewsArticle";
import GetStartedPage from "./pages/get-started";
import ServicesIndexPage from "./pages/services/index";
import ServiceDetailPage from "./pages/services/[slug]";
import FeedbackPage from "./pages/feedback";
import PrivacyPage from "./pages/privacy";
import TermsPage from "./pages/terms";
import ContactPage from "./pages/contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/visitor" element={<VisitorPage />} />
          <Route path="/city-services" element={<CityServicesPage />} />
          <Route path="/share-feedback" element={<ShareFeedbackPage />} />
          <Route path="/news/:slug" element={<NewsArticlePage />} />
          
          {/* New Routes */}
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/services" element={<ServicesIndexPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
