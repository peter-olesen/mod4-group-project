// Dependency Imports
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Layout Imports
import { SectionLayout } from "./layouts/SectionLayout";
import { QuizLayout } from "./layouts/QuizLayout";

// Homepage Import
import { Homepage } from "./components/Homepage/Homepage";

// Norse Mythology Imports
import { NorseHomepage } from "./components/NorseHomepage/NorseHomepage";
import { NorseExtended } from "./pages/NorseExtended";
import { GodCardsPage } from "./pages/GodCardsPage";
import { Gods } from "./components/api_norse_myth/Gods";

// Icelandic Folklore Imports
import { IcelandicFolkHome } from "./pages/IcelandicFolkHome";
import { IcelandicFolklore } from "./pages/IcelandicFolklore";
import IcelandicSagas from "./pages/IcelandicSagas";
import { Map } from "./pages/Map";

// Quiz Imports
import { QuizFrontpage } from "./pages/QuizFrontpage";
import Quiz1page from "./pages/Quiz1page";

const App: React.FC = () => {
  const [] = useState(0);
  return (
    // Helmet Provider is used to add meta tags on the pages. Currently not in use.
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Homepage />} />

          {/* Norse Mythology Routes */}
          <Route path={"/norse-mythology"} element={<SectionLayout />}>
            <Route index element={<NorseHomepage />} />
          </Route>
          <Route path={"/norse-extended"} element={<SectionLayout />}>
            <Route index element={<NorseExtended />} />
          </Route>
          <Route path={"/gods-creatures"} element={<SectionLayout />}>
            <Route index element={<GodCardsPage />} />
          </Route>
          <Route path={"/gods-creatures/:name"} element={<SectionLayout />}>
            <Route index element={<Gods />} />
          </Route>

          {/* Icelandic Folklore Routes */}
          <Route path={"/icelandic-folklore"} element={<SectionLayout />}>
            <Route index element={<IcelandicFolklore />} />
          </Route>
          <Route path={"/icelandic-sagas"} element={<SectionLayout />}>
            <Route index element={<IcelandicSagas />} />
          </Route>
          <Route path={"/historical-map"} element={<SectionLayout />}>
            <Route index element={<Map />} />
          </Route>
          {/* <Route path={"/icelandic-tales"} element={<SectionLayout />}>
            <Route index element={<IcelandicFolkHome />} />
          </Route> */}

          {/* Quiz */}
          <Route path={"/quiz"} element={<QuizLayout />}>
            <Route index element={<QuizFrontpage />} />
          </Route>
          <Route path={"/quiz-page"} element={<QuizLayout />}>
            <Route index element={<Quiz1page />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
