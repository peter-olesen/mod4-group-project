import ContentButton from "../ui/content_button.tsx";
import norseHomepage from "../../assets/images/Homepage_background.png";
import norseGods from "../../assets/images/norse_gods.jpg";
import { NavLink } from "react-router-dom";
/* =======================
  Norse Mythology Homepage
======================= */
import NorseGodCards  from "../api_norse_myth/GodList.tsx";

export const NorseHomepage = () => {
  return (
    <>
      <div className="px-5 pt-8">
        <div className=" flex flex-col justify-center items-center ">
          <img className="" src={norseHomepage} alt="" />
        </div>
        <div className="flex justify-center flex-col items-center">
          <h2 className=" py-9 text-center font-newRocker text-fire text-2xl animate__animated animate__flipInX">
            Norse mythology introduction
          </h2>
          <p className="font-montserrat text-base leading-7 animate__animated animate__fadeInLeft">
            Norse mythology is a collection of ancient Scandinavian stories
            about the origins of the world, nature, and the fate of the cosmos.
            It tells of gods, giants, and other mythical beings living in realms
            like Asgard, Midgard (Earth), and Helheim. These tales explore
            themes of fate, honor, and the balance between order and chaos,
            leading up to Ragnarok, the end of the world. They’re filled with
            epic battles, sacrifices, and the shared adventures of gods and
            mortals.
          </p>
        </div>
        <div className="pt-5">
          <div className="pb-3">
            <h2 className=" flex justify-center mb-8 font-newRocker text-fire text-2xl">Norse Gods</h2>
          </div>
          <div className="flex justify-center items-center ">
            <img
              className="object-center w-[413px] h-full rounded-br-[50px]"
              src={norseGods}
              alt=""
            />
          </div>
          <div className="flex justify-center my-8">
            <NavLink to="/gods-creatures">
              <ContentButton content="View collection"></ContentButton>
            </NavLink>
          </div>
        
        </div>
        <NorseGodCards/>

      </div>
      <hr />
    </>
  );
};
