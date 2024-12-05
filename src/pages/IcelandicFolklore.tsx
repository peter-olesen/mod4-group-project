import { NavLink } from "react-router-dom";
import IcelandFolklore from "/src/assets/images/Iceland_back.jpg";
import { Button } from "@/components/ui/button";

/* ====================================
    Hardcoded Icelandic Folklore Homepage
  ==================================== */
export const IcelandicFolklore = () => {
  return (
    <div className="flex flex-col mx-5 ">
      <h1 className="font-newRocker text-fire  text-center m-auto text-4xl  mt-16 mb-8 animate__animated animate__flipInX ">
        Icelandic Folklore
      </h1>
      <img src={IcelandFolklore} className="rounded-br-[50px]" />
      <p className="font-montserrat mt-11  animate__animated animate__fadeInLeft">
        Icelandic folklore is a rich tapestry of myths and legends deeply
        influenced by the country’s rugged landscapes and Norse roots. It
        includes tales of huldufólk (hidden people) and elves, thought to live
        invisibly alongside humans and connected to Iceland's natural landmarks.
      </p>
      <p className="font-montserrat mt-8 animate__animated animate__fadeInLeft">
        Trolls and giants feature prominently, often portrayed as stone-like
        figures frozen by daylight in volcanic landscapes.{" "}
      </p>
      <p className="font-montserrat mt-8 animate__animated animate__fadeInLeft">
        The folklore also includes stories of witches and magical practices,
        rooted in ancient Norse traditions. Icelandic tales of ghosts and
        spirits reflect beliefs about the afterlife, while unique figures like
        the Yule Lads bring a playful, yet eerie, spin to Christmas traditions.{" "}
      </p>
      <p className="font-montserrat mt-8 animate__animated animate__fadeInLeft">
        This folklore weaves together elements of nature, magic, and mystery,
        capturing Iceland’s unique spirit and cultural heritage.
      </p>
      <p className="font-montserrat mt-10"></p>
      <NavLink to="/icelandic-sagas">
        <Button variant={"outline"} className="font-light animate__bounceIn">
          Read more tales here
        </Button>
      </NavLink>
      <hr></hr>
    </div>
  );
};
