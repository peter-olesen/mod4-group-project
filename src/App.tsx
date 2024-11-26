import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SectionLayout } from "./layouts/SectionLayout.tsx";
import Homepage from "./components/homepage/homepage";
import NorseHomepage from "./components/NorseHomepage/homepage_comp.tsx";

const App: React.FC = () => {
  const [] = useState(0);
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/norse-mythology"} element={<SectionLayout />}>
            <Route index element={<NorseHomepage />} />
          </Route>
          <Route path={"/icelandic-folklore"} element={<SectionLayout />}>
            <Route index element={<Homepage />} />
          </Route>
          {/* <Route path={"/quiz"} element={<QuizFrontPage />} /> */}
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

    // </>
  );
};

export default App;
