import { useState } from "react";
/* import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { NavBarComponent } from "./components/hamburgerMenu/hamburger";
import IcelandicFolklore from "./pages/IcelandicFolklore.tsx";
import HistoricalMap from "./pages/HistoricalMap.tsx";
import IcelandicFolkHome from "./pages/IcelandicFolkHome.tsx";
import IcelandicSagas from "./pages/IcelandicSagas.tsx";
import { Footer } from "./components/Footer/footer.tsx";
const App: React.FC = () => {
  const [] = useState(0);
  return (
    <>
      <NavBarComponent></NavBarComponent>
      {/* <IcelandicFolklore /> */}
      <IcelandicSagas />
      <Footer></Footer>

      {/*  <Homepage />
      <ContentButton></ContentButton> */}

      {/* <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<MainLayout />}>
              <Route index element={<FrontPage />} />
              <Route path={"/something"} element={<FrontPage />} />
            </Route>
            <Route path={"/quiz"} element={<QuizFrontPage />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider> }
      }*/}
    </>
  );
};
export default App;
