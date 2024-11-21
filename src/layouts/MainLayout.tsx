import { NavBarComponent } from "@/components/hamburgerMenu/hamburger";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <NavBarComponent />
      <Outlet />
    </>
  );
};
