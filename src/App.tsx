import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { MainLayout } from "./layouts/MainLayout";
import { FrontPage } from "./pages/FrontPage.tsx";
// import { NavBarComponent } from "./components/hamburgerMenu/hamburger";
import Homepage from "./components/homepage/homepage";
import ContentButton from "./components/ui/content_button";
import HistoricalMap from "./pages/HistoricalMap";
import { NavBarComponent } from "./components/hamburgerMenu/hamburger.tsx";

function App() {
  return (
    <>
      <NavBarComponent></NavBarComponent>
      <HistoricalMap />

      {/*  <Homepage />
      <ContentButton></ContentButton> */}

      {/* <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<MainLayout />}>
              <Route index element={<FrontPage />} />
              <Route path={"/something"} element={<FrontPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>  */}
    </>
  );
}
export default App;
