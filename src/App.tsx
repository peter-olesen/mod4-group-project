import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SectionLayout } from "./layouts/SectionLayout.tsx";
import Homepage from "./components/homepage/homepage";
import NorseHomepage from "./components/NorseHomepage/homepage_comp.tsx";
import IcelandicFolkHome from "./pages/IcelandicFolkHome.tsx";
import IcelandicSagas from "./pages/IcelandicSagas.tsx";
import HistoricalMap from "./pages/HistoricalMap.tsx";
import IcelandicFolklore from "./pages/IcelandicFolklore.tsx";
import { QuizFrontpage } from "./pages/QuizFrontpage.tsx";
import { QuizLayout } from "./layouts/QuizLayout.tsx";

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
