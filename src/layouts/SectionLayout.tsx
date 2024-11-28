import { Outlet } from "react-router-dom";
import { NavBarComponent } from "@/components/hamburgerMenu/hamburger";
import { Footer } from "@/components/Footer/footer";

export const SectionLayout = () => {
  return (
    <>
      <NavBarComponent />
      <Outlet />
      <Footer />
    </>
  );
};
