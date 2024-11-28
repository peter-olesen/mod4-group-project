import { useNavigate } from "react-router-dom";

import { Button } from "../ui/button";

function Homepage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative bg-[url('/src/assets/images/Home.jpg')] h-screen w-[100%] bg-cover bg-center">
        <h1 className="font-newRocker text-5xl text-center py-20">Nordur</h1>
        <div className="absolute bottom-20 flex align-center justify-around w-[100%]">
          <Button
            onClick={() => navigate("/norse-mythology")}
            className="bg-transparent border-l-2 border-b-2 active:shadow-xl  hover:bg-transparent  border-white xs:text-sm text-xl font-newRocker shrink-5"
          >
            Norse Mythology
          </Button>
          <Button
            onClick={() => navigate("/icelandic-folklore")}
            className="bg-transparent hover:bg-transparent  active:shadow-xl border-b-2  border-r-2 xs:text-sm text-xl font-newRocker shrink-5"
          >
            {" "}
            Icelandic Folklore
          </Button>
        </div>
      </div>
    </>
  );
}

export default Homepage;
