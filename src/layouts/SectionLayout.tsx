import { Outlet } from "react-router-dom";
import { HamburgerMenu } from "../components/HamburgerMenu/HamburgerMenu";
import { Footer } from "@/components/Footer/temp_Footer";

export const SectionLayout = () => {
  return (
    <>
      <HamburgerMenu />
      <Outlet />
      <Footer />
    </>
  );
};
