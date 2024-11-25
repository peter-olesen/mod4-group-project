import React, { useState, useEffect } from "react";
import IcelandFolklore from "../assets/images/formated/IcelandicFolklore.png";
const IcelandicFolklore = () => {
  return (
    <div>
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80">
        Icelandic Folklore
      </h1>
      <img src={IcelandFolklore} />
    </div>
  );
};

export default IcelandicFolklore;
