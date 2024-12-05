import { useNavigate } from "react-router-dom";
import "animate.css";

import { Button } from "../components/ui/button";

export const Homepage = () => {
  const navigate = useNavigate();
  /* ===================================================
    Landing Page - background img, header and two buttons
  =================================================== */
  return (
    <>
      <div className="relative bg-[url('/src/assets/images/Home.jpg')] h-screen w-[100%] bg-cover bg-center">
        <h1 className="font-newRocker text-6xl text-center py-20 animate__animated animate__fadeInDown">
          Nordur
        </h1>
        <div className="absolute bottom-20 flex align-center justify-around w-[100%]">
          <Button
            onClick={() => navigate("/norse-mythology")}
            className="bg-transparent animate__animated   animate__fadeInLeft border-l-2 border-b-2 active:shadow-xl  hover:bg-transparent  border-white xs:text-sm text-xl font-newRocker shrink-5"
          >
            Norse Mythology
          </Button>
          <Button
            onClick={() => navigate("/icelandic-folklore")}
            className="bg-transparent hover:bg-transparent  animate__animated   animate__fadeInRight  active:shadow-xl border-b-2  border-r-2 xs:text-sm text-xl font-newRocker shrink-5"
          >
            {" "}
            Icelandic Folklore
          </Button>
        </div>
      </div>
    </>
  );
};
