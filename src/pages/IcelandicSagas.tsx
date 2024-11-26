import React, { useState, useEffect } from "react";
import Droplaugarsona from "../assets/images/formated/Dropplaugarsona saga.png";
//we need cards for this//
const IcelandicSagas = () => {
  return (
    <div>
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80 mt-3 mb-9">
        Icelandic Sagas
      </h1>
      <img src={Droplaugarsona} className="m-auto w-60" />
    </div>
  );
};

export default IcelandicSagas;
