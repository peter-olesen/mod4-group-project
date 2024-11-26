import { useState } from "react";
/*
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { MainLayout } from "./layouts/MainLayout";
import GodsElement from "./components/api_norse_myth/godsElement.tsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Footer } from "./components/Footer/footer.tsx";
import { FrontPage } from "./pages/FrontPage.tsx";
import Homepage from "./components/homepage/homepage";
import ContentButton from "./components/ui/content_button";
import HistoricalMap from "./pages/HistoricalMap";
import Gods from "./components/api_norse_myth/gods.tsx"; */
import NorseGodCards from "./components/api_norse_myth/cards.tsx";


const App: React.FC = () => {
  const [] = useState(0);
  return (
    <>
      
      <NorseGodCards name="odin"></NorseGodCards>
    </>
  );
};
export default App;
