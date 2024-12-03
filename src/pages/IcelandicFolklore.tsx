import { NavLink } from "react-router-dom";
import IcelandFolklore from "../assets/images/formated/Icelandicfolkloremain.png";

import ContentButton from "@/components/ui/content_button";
  /* ====================================
    Hardcoded Icelandic Folklore Homepage
  ==================================== */
export const IcelandicFolklore = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80 my-16 ">
        Icelandic Folklore
      </h1>
      <img src={IcelandFolklore} className="mx-16" />
      <p className="font-montserrat mt-11 mx-5">
        Icelandic folklore is a rich tapestry of myths and legends deeply
        influenced by the country’s rugged landscapes and Norse roots. It
        includes tales of huldufólk (hidden people) and elves, thought to live
        invisibly alongside humans and connected to Iceland's natural landmarks.
      </p>
      <p className="font-montserrat mt-8 mx-5">
        Trolls and giants feature prominently, often portrayed as stone-like
        figures frozen by daylight in volcanic landscapes.{" "}
      </p>
      <p className="font-montserrat mt-8 mx-5">
        The folklore also includes stories of witches and magical practices,
        rooted in ancient Norse traditions. Icelandic tales of ghosts and
        spirits reflect beliefs about the afterlife, while unique figures like
        the Yule Lads bring a playful, yet eerie, spin to Christmas traditions.{" "}
      </p>
      <p className="font-montserrat mt-8 mx-5">
        This folklore weaves together elements of nature, magic, and mystery,
        capturing Iceland’s unique spirit and cultural heritage.
      </p>
      <p className="font-montserrat mt-20"></p>
      <div className="flex justify-center mb-16">
        <NavLink to="/icelandic-sagas">
          <ContentButton content="Read The Tales Here" >
            
          </ContentButton>
        </NavLink>
      </div>
      <hr></hr>

    </div>
  );
};
