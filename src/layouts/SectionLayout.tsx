import { Outlet } from "react-router-dom";
import { HamburgerMenu } from "../components/HamburgerMenu/HamburgerMenu";
import { Footer } from "../components/Footer/Footer";

export const SectionLayout = () => {
  return (
    <>
      <HamburgerMenu />
      <Outlet />
      <Footer />
    </>
  );
};
