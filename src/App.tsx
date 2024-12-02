import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { SectionLayout } from "./layouts/SectionLayout";
import { QuizFrontpage } from "./pages/QuizFrontpage";
import { QuizLayout } from "./layouts/QuizLayout";

import { Homepage } from "./components/Homepage/Homepage";
import { NorseHomepage } from "./components/NorseHomepage/NorseHomepage";
import { IcelandicFolkHome } from "./pages/IcelandicFolkHome";
import { IcelandicSagas } from "./pages/IcelandicSagas";
import { HistoricalMap } from "./pages/HistoricalMap";
import { IcelandicFolklore } from "./pages/IcelandicFolklore";
import { NorseExtended } from "./pages/NorseExtended";
import { GodCardsPage } from "./pages/GodCardsPage";
import { Gods } from "./components/api_norse_myth/gods";

const App: React.FC = () => {
  const [] = useState(0);
  return (
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

          <Route path={"/gods-creatures/:name"} element={<SectionLayout /> }>
            <Route index element={<Gods />} />
          </Route>


          {/* Icelandic Folklore Routes */}
          <Route path={"/icelandic-folklore"} element={<SectionLayout />}>
            <Route index element={<IcelandicFolkHome />} />
          </Route>
          <Route path={"/icelandic-sagas"} element={<SectionLayout />}>
            <Route index element={<IcelandicSagas />} />
          </Route>
          <Route path={"/historical-map"} element={<SectionLayout />}>
            <Route index element={<HistoricalMap />} />
          </Route>
          <Route path={"/iceland-folklore"} element={<SectionLayout />}>
            <Route index element={<IcelandicFolklore />} />
          </Route>

          {/* Quiz */}
          <Route path={"/quiz"} element={<QuizLayout />}>
            <Route index element={<QuizFrontpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

    // </>
  );
};

export default App;
