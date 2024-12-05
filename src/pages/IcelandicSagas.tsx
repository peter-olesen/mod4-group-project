import SagaList from "./SagaList";
import Droplaugarsona from "../assets/images/formated/Droplaug2.png";
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

/* ====================================
  Cards of Icelandic Folklore and Sagas
==================================== */
const IcelandicSagas = () => {
  /* const sagas = [
    {name:"", about:""},
    {name:"", about:""},
    {name:"", about:""},
    {name:"", about:""},
    {name:"", about:""},
    {name:"", about:""},
    {name:"", about:""},
    {name:"", about:""},
    {name:"", about:""},
    {name:"", about:""},
    {name:"", about:""},
    {name:"", about:""},
    {name:"", about:""},
    {name:"", about:""},
    {name:"", about:""},
  ] */
  return (
    <><h1 className="flex flex-col justify-center items-center mt-16 font-newRocker text-fire text-4xl text-center">
      Icelandic Sagas and Folklore
    </h1>
    <SagaList/></>
  
  );
};

export default IcelandicSagas;