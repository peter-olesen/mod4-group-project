import React, { useState, useEffect } from "react";
import Map from "../assets/images/formated/Map of Iceland.png";
import Timeline from "../assets/images/formated/Timeline.png";
import Frame from "../assets/images/formated/Frame 17.png";
const HistoricalMap = () => {
  return (
    <div>
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80">
        History of Icelandic Folklore{" "}
      </h1>
      <img src={Map} />
      <img src={Timeline} />

      <hr></hr>

      <p className="font-montserrat mt-11">
        Sagas and Mythology: The majority of Icelandic mythological stories and
        sagas are set during this period, with tales of gods (Odin, Thor,
        Freyja) and legendary heroes like Sigurd the Dragon Slayer. The stories
        are passed down orally and later written down in the 13th century.
        Trolls and Giants: Tales of trolls, giants, and other creatures from the
        supernatural realms emerge. The myth of the Jötunn (giant) and the troll
        as destructive or mischievous beings becomes prominent.
      </p>

      <img src={Frame} className="m-auto mt-11" />
    </div>
  );
};
export default HistoricalMap;
