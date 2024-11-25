import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { MainLayout } from "./layouts/MainLayout";
import { FrontPage } from "./pages/FrontPage.tsx";
import { NavBarComponent } from "./components/hamburgerMenu/hamburger";
import Homepage from "./components/homepage/homepage";
import ContentButton from "./components/ui/content_button";
import Gods from "./components/api_norse_myth/gods.tsx";
import GodsElement from "./components/api_norse_myth/godsElement.tsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const App: React.FC = () => {
  const [] = useState(0)
  return (
    <>
      {/* <QuizFrontpage /> */}
      {/* <OrangeButton /> */}
      {/* <Homepage /> */}
      {/* <ContentButton></ContentButton> */}
      {/* <NavBarComponent></NavBarComponent> */}
      {/* <Gods name="Odin"></Gods> */}
      
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
      }*/
    </>
  );

export default App