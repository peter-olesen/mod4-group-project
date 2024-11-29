import React, { useState, useEffect } from "react";
import Droplaugarsona from "../assets/images/formated/Dropplaugarsona saga.png";
import ContentButton from "@/components/ui/content_button";
//we need cards for this//
const IcelandicSagas = () => {
  return (
    <div>
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80 mt-3 mb-9">
        Icelandic Sagas
      </h1>
      <img src={Droplaugarsona} className="m-auto w-60" />
    </div>

    /*
    <div>
      {Gods.length >0 ?(
        gods.map(god: God) => (
          <div key={God.slug} className="card flex-col items-center justify-center my-16 border-b-2 pb-16 mx-5">
            {(customImages[God.slug] || God.image?.url) && (
              <img 
              src={customImages[God.slug] || God.image?.url}
              alt={God.image?.title || God.title} width="200"
              className="h-60 w-40 rounded-br-[50px] pb-5"/>
            ) )}
            <h2 className="font-semibold text-xl pb-5 font-montserrat">{God.title}</h2>
            <p className="font-montserrat">{God.tagline}</p>
            <div className=" mt-7">
              <ContentButton content="See More"></ContentButton>
            </div>
          </div>
        )
      )}
    </div>

*/
  );
};

export default IcelandicSagas;
