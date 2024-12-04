import React, { useState, useEffect } from "react";
import IcelandFolklore from "../assets/images/formated/Icelandicfolkloremain.png";
import { Button } from "@/components/ui/button";

export const IcelandicFolklore = () => {
  return (
    <div>
      <h1
        className="font-modernAntiqua text-center m-auto text-2xl w-80 mt-10 mb-10
        animate__animated animate__flipInX text-fire"
      >
        Icelandic Folklore
      </h1>
      <img src={IcelandFolklore} />
      <p className="font-montserrat mt-11 mx-5 animate__animated animate__fadeInLeft">
        <b>Icelandic folklore</b> is a rich tapestry of myths and legends deeply
        influenced by the country’s rugged landscapes and Norse roots. It
        includes tales of huldufólk (hidden people) and elves, thought to live
        invisibly alongside humans and connected to Iceland's natural landmarks.
      </p>
      <p className="font-montserrat mt-8 mx-5 animate__animated animate__fadeInLeft">
        <b>Trolls and Giants</b> feature prominently, often portrayed as
        stone-like figures frozen by daylight in volcanic landscapes.{" "}
      </p>
      <p className="font-montserrat mt-8 mx-5 animate__animated animate__fadeInLeft">
        <b>The folklore</b> also includes stories of witches and magical
        practices, rooted in ancient Norse traditions. Icelandic tales of ghosts
        and spirits reflect beliefs about the afterlife, while unique figures
        like the Yule Lads bring a playful, yet eerie, spin to Christmas
        traditions.{" "}
      </p>
      <p className="font-montserrat mt-8 mx-5 animate__animated animate__fadeInLeft">
        <b>This folklore</b> weaves together elements of nature, magic, and
        mystery, capturing Iceland’s unique spirit and cultural heritage.
      </p>
      <p className="font-montserrat mt-20"></p>
      <Button variant={"outline"} className="font-light animate__bounceIn">
        Read more tales here
      </Button>
      <hr></hr>
    </div>
  );
};

//we need cards here///
