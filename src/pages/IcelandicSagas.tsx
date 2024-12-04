import React, { useState, useEffect } from "react";
import Droplaugarsona from "../assets/images/formated/Dropplaugarsona saga.png";
import ContentButton from "@/components/ui/content_button";
import Deacon from "../assets/images/formated/Deacon of dark river.png";
import Grýla from "../assets/images/formated/Gryla.png";
import YuleLads from "../assets/images/formated/Yule lads.png";
import Lakeworm from "../assets/images/formated/The lake worm of lagarfljót.png";
import Trolls from "../assets/images/formated/trolls.png";
import Bukolla from "../assets/images/formated/Búkolla.png";
import LandWights from "../assets/images/formated/The land wights of iceland.png";
import Bandamannasaga from "../assets/images/formated/Bandamanna saga.png";
import Egilssaga from "../assets/images/formated/Egils Saga.png";
import Hrafnkelssaga from "../assets/images/formated/Hrafnkels saga.png";
import BrennuNjalssaga from "../assets/images/formated/Brennu Njáls saga.png";
import Hiddenpeople from "../assets/images/formated/The hidden people.png";
import Grettissaga from "../assets/images/formated/Grettis saga.png";
import MountainEyvindur from "../assets/images/formated/Mountain Eyvindur.png";

const IcelandicSagas = () => {
  return (
    <div>
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80 mt-3 mb-9 animate__animated animate__jello">
        Icelandic Sagas
      </h1>
      <img src={Droplaugarsona} className="m-auto w-60 mb-10" />
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80 mt-5 mb-9 animate__heartBeat">
        Droplaugarsona Saga
      </h1>
      <p className="font-montserrat mt-11 mx-5 mb-10 animate__animated animate__fadeInLeft">
        <b>Droplaugarsona Saga</b> is an Icelandic family saga that tells the
        story of early settlers in medieval Iceland. Though shorter and
        lesser-known than sagas like Njáls Saga or Egils Saga, it provides
        valuable insight into the lives and moral codes of Iceland's early
        inhabitants.{" "}
      </p>
      <hr></hr>
      <img src={Deacon} className="m-auto w-60 mt-10" />
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80 mt-5 mb-9 animate__animated animate__swing">
        The Deacon of Dark River
      </h1>
      <p className="font-montserrat mt-11 mx-5 mb-10 animate__animated animate__fadeInLeft">
        <b>The Deacon of Dark River</b> is one of Iceland’s most famous ghost
        stories, about a deacon who dies suddenly before Christmas and returns
        as a ghost to fetch his beloved. It’s a haunting tale involving themes
        of love, loss, and the supernatural
      </p>
      <hr></hr>
      <img src={MountainEyvindur} className="m-auto w-60 mt-10 " />
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80 mt-5 mb-9">
        Mountain-Eyvindur
      </h1>
      <p className="font-montserrat mt-11 mx-5 mb-10 animate__animated animate__fadeInLeft">
        <b>Fjalla-Eyvindur</b> and Halla are infamous Icelandic outlaws who
        lived in the 18th century. They fled to the mountains, evading capture
        by authorities, and became legendary for their survival in harsh
        conditions.
      </p>
      <hr></hr>
      <img src={Grýla} className="m-auto w-60 mt-10" />
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80 mt-5 mb-9">
        Grýla
      </h1>
      <p className="font-montserrat mt-11 mx-5 mb-10 animate__animated animate__fadeInLeft">
        <b>Grýla</b> is a giantess in Icelandic folklore, known for kidnapping
        and eating naughty children. She lives in the mountains with her husband
        and her many children, the Yule Lads.
      </p>
      <hr></hr>
      <img src={YuleLads} className="m-auto w-60 mt-10" />
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80 mt-5 mb-9">
        The Yule Lads
      </h1>
      <p className="font-montserrat mt-11 mx-5 animate__animated animate__fadeInLeft">
        <b>The Yule Lads</b> are mischievous figures in Icelandic Christmas
        tradition. They are 13 brothers who visit children during the 13 nights
        leading up to Christmas, each with their own unique prank.t into the
        lives and moral codes of Iceland's early inhabitants.
      </p>
      <hr></hr>
      <img src={Lakeworm} className="m-auto w-60 mt-10" />
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80 mt-5 mb-9">
        The Lake Worm of Lagarfljót
      </h1>
      <p className="font-montserrat mt-11 mx-5 mb-10 animate__animated animate__fadeInLeft">
        <b>The Lake Worm of Lagarfljót</b> is a legendary serpent said to live
        in Lagarfljót lake in eastern Iceland. Sightings of the creature have
        sparked intrigue and are part of Icelandic mythology.
      </p>
      <hr></hr>
      <img src={Trolls} className="m-auto w-60 mt-10" />
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80 mt-5 mb-9">
        Trolls
      </h1>
      <p className="font-montserrat mt-11 mx-5 mb-10 animate__animated animate__fadeInLeft">
        <span className="font-bold">Trolls</span> are large, fearsome creatures
        in Norse and Icelandic folklore. Known for their strength, they often
        live in mountains or caves and are dangerous to humans, particularly if
        encountered at night.
      </p>
      <hr></hr>
      <img src={Bukolla} className="m-auto w-60 mt-10" />
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80 mt-5 mb-9">
        Búkolla
      </h1>
      <p className="font-montserrat mt-11 mx-5 mb-10 animate__animated animate__fadeInLeft">
        <b>Búkolla</b> is a giantess in Icelandic folklore, sometimes described
        as an ogress. She is known for her strength and for being a fearsome
        protector of her domain.
      </p>
      <hr></hr>
      <img src={LandWights} className="m-auto w-60 mt-10" />
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80 mt-5 mb-9">
        The Land Wights of Iceland
      </h1>
      <p className="font-montserrat mt-11 mx-5 mb-10 animate__animated animate__fadeInLeft">
        <b>Landvættir</b> are the spirit beings believed to protect Iceland's
        natural features, like mountains and rivers. There are four primary
        landvættir representing different regions, and they are considered
        guardians of the land.
      </p>
      <hr></hr>
      <img src={Bandamannasaga} className="m-auto w-60 mt-10" />
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80 mt-5 mb-9">
        Bandamanna Saga
      </h1>
      <p className="font-montserrat mt-11 mx-5 mb-10 animate__animated animate__fadeInLeft">
        <b>Bandamanna Saga</b> is one of the lesser-known Icelandic sagas, part
        of the Íslendingasögur. It is notable for being the only saga where
        commoners, rather than chieftains or kings, are at the front of the
        story. Set in the 11th century, the narrative centers around themes of
        loyalty, betrayal, and power struggles among farmers in Iceland.
      </p>
      <hr></hr>
      <img src={Egilssaga} className="m-auto w-60 mt-10" />
      <h1 className="font-modernAntiqua text-center m-auto text-2xl mt-5 mb-9">
        Egils Saga
      </h1>
      <p className="font-montserrat mt-11 mx-5 mb-10 animate__animated animate__fadeInLeft">
        <b>Egil’s Saga</b> is a medieval Icelandic saga that recounts the life
        of Egil Skallagrimsson, a complex Viking poet, warrior, and farmer.
        Written in the 13th century and attributed to Snorri Sturluson, the saga
        opens several generations, beginning with Egil’s grandfather Kveldulf
        and father Skallagrim.
      </p>
      <hr></hr>
      <img src={Hrafnkelssaga} className="m-auto w-60 mt-10" />
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80 mt-5 mb-9">
        Hrafnkels Saga
      </h1>
      <p className="font-montserrat mt-11 mx-5 mb-10 animate__animated animate__fadeInLeft">
        <b>Hrafnkels Saga</b> is set in the Viking Age, focusing on the themes
        of power, honor and the complex nature of justice. The story centers
        around Hrafnkel, a proud and powerful chieftain known for his devotion
        to the god Freyr and for owning a prized stallion named Freyfaxi. nning
        with Egil’s grandfather Kveldulf and father Skallagrim.
      </p>
      <hr></hr>
      <img src={BrennuNjalssaga} className="m-auto w-60 mt-10" />
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80 mt-5 mb-9">
        Brennu-Njáls Saga
      </h1>
      <p className="font-montserrat mt-11 mx-5 mb-10 animate__animated animate__fadeInLeft">
        <b>Brennu-Njáls Saga</b> also known as The Story of Burnt Njáll, is one
        of the most famous sagas from the medieval Iceland, compose in the 13th
        century. It centers around themes of honor, vengeance, and the complex
        social codes of medieval Norse society.
      </p>
      <hr></hr>
      <img src={Hiddenpeople} className="m-auto w-60 mt-10" />
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80 mt-5 mb-9">
        The Hidden People
      </h1>
      <p className="font-montserrat mt-11 mx-5 mb-10 animate__animated animate__fadeInLeft">
        <b>The Huldufólk </b>(Hidden People) are mystical beings in Icelandic
        folklore, living in rocks and hills. They can be kind or vengeful,
        depending on how humans treat them.
      </p>
      <hr></hr>
      <img src={Grettissaga} className="m-auto w-60 mt-10" />
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80 mt-5 mb-9">
        Grettis Saga
      </h1>
      <p className="font-montserrat mt-11 mx-5 mb-10 animate__animated animate__fadeInLeft">
        <b>Grettis Saga</b> is set in the viking age, it recounts the life and
        exploits of Grettir Ásmundarson, a complex and tragic hero known for his
        immense strength, courage, and rebellious nature.
      </p>
      <hr></hr>
    </div>

    /*  
    <div>
      {Gods.length > 0 ?(
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
