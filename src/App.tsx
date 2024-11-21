
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { MainLayout } from "./layouts/MainLayout";
import { FrontPage } from "./pages/FrontPage.tsx";
// import { NavBarComponent } from "./components/hamburgerMenu/hamburger";
import Homepage from "./components/homepage/homepage";

function App() {
  return <>
    <Homepage />
<!--   <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<MainLayout />}>
              <Route index element={<FrontPage />} />
              <Route path={"/something"} element={<FrontPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider> -->
  </>;