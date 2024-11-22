import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { MainLayout } from "./layouts/MainLayout";
import { FrontPage } from "./pages/FrontPage.tsx";
import {QuizFrontpage} from "./pages/QuizFrontpage.tsx";
import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <QuizFrontpage />
      {/* <OrangeButton /> */}
    </div>
  );
};

/* function App() {
  return (



    <>
      {/* <Homepage /> }
      {/* <ContentButton></ContentButton> }
      <NavBarComponent></NavBarComponent>
     
      <Gods name="Odin"></Gods>

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
    </>
  );
}*/
export default App
