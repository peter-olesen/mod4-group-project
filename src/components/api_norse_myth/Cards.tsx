import ContentButton from "../ui/content_button";
import Droplaugarsona from "../../assets/images/formated/Droplaug2.png";
import Gryla from "../../assets/images/formated/Gryla.png";
import Trolls from "../../assets/images/formated/trolls.png";
import Grettissaga from "../../assets/images/formated/Grettis saga.png";
import MountainEyvindur from "../../assets/images/formated/Mountain Eyvindur.png";
import Hiddenpeople from "../../assets/images/formated/The hidden people.png";
import Deacon from "../../assets/images/formated/Deacon of dark river.png";
import YuleLads from "../../assets/images/formated/Yule lads.png";
import Lakeworm from "../../assets/images/formated/The lake worm of lagarfljót.png";
/* 
import Bukolla from "../assets/images/formated/Búkolla.png";
import LandWights from "../assets/images/formated/The land wights of iceland.png";
import Bandamannasaga from "../assets/images/formated/Bandamanna saga.png";
import Egilssaga from "../assets/images/formated/Egils Saga.png";
import Hrafnkelssaga from "../assets/images/formated/Hrafnkels saga.png";
import BrennuNjalssaga from "../assets/images/formated/Brennu Njáls saga.png";

 */

import berserker from "../../assets/images/formated/Berserker.png";
import nidhogg from "../../assets/images/formated/Nidhogg.png";
import valkyrie from "../../assets/images/formated/Valkyrie.png";
import fenrir from "../../assets/images/formated/Fenrir.png";
import ymir from "../../assets/images/formated/Ymir.png";
import sleipnir from "../../assets/images/formated/Sleipnir.png";
import rataroskr from "../../assets/images/formated/Ratatoskr.png";
import jormungand from "../../assets/images/formated/Jormungand.png";
import odinImg from "../../assets/images/formated/Odin.png";
import friggImg from "../../assets/images/formated/Frigg.png";
import thorImg from "../../assets/images/Thor.jpg";
import freyjaImg from "../../assets/images/formated/Freyja.png";
import lokiImg from "../../assets/images/loki.jpg";
import baldurImg from "../../assets/images/formated/Baldur.png";
import heimdallImg from "../../assets/images/formated/Heimdall.png";
import idunImg from "../../assets/images/idun.png";
import freyrImg from "../../assets/images/freyr.jpg";
import nerthusImg from "../../assets/images/nerthus.png";
import tyrImg from "../../assets/images/formated/Tyr.png";
import njordImg from "../../assets/images/njord.png";

import  {Link} from "react-router-dom"

/*
======================================================================
THE COMPONENT GOES THROUGH CREATURELIST.TSX AND THAT IS PUT IN APP.TSX
======================================================================
*/

type Props = {
  name: string;
  about: string;
  imgsrc?: string;
};
const CreatureCards = ({ name, about, imgsrc }: Props) => {
  /* ==============
    Imported Images
  ============== */


  const images: Record<string, string> = {
    //icelandicsagas
    hiddenpeople: Hiddenpeople,
    grettissaga: Grettissaga,
    "droplaugarsona saga": Droplaugarsona,
    "mountain-eyvindur": MountainEyvindur,
    "the deacon of dark river": Deacon,
    "the lake worm of lagarfljót": Lakeworm,
    "the yule lads": YuleLads,
    gryla: Gryla,
    trolls: Trolls,
    //creatures
    berserker: berserker,
    nidhogg: nidhogg,
    valkyrie: valkyrie,
    fenrir: fenrir,
    ymir: ymir,
    sleipnir: sleipnir,
    rataroskr: rataroskr,
    jormungand: jormungand,
    //gods
    odin: odinImg,
    frigg: friggImg,
    thor: thorImg,
    freya: freyjaImg,
    loki: lokiImg,
    baldur: baldurImg,
    heimdall: heimdallImg,
    idun: idunImg,
    freyr: freyrImg,
    nerthus: nerthusImg,
    tyr: tyrImg,
    njord: njordImg,
  };

  const imgUrl = images[name.toLowerCase()];
  console.log(imgUrl)
  console.log(name)
  return (
    <>
      {/*========
      The Cards
    ========*/}
      <div className="card flex flex-col items-center justify-center my-8 border-b-2 pb-8 mx-5" >
        {(imgsrc || imgUrl) && (
          <img
            src={imgUrl || imgsrc}
            alt={name}
            width="200"
            className="h-60 w-40 rounded-br-[50px] object-cover	 pb-5"
          />
        )}

        <h2 className=" pb-5 font-newRocker text-fire text-2xl">{name}</h2>

        <p className="font-montserrat">{about}</p>
        <div className=" mt-7 ">
        <Link to={"/gods-creatures/" + name}>
            <ContentButton content="Read more"></ContentButton>
          </Link>
        </div>
      </div>
    </>
  );
};
export default CreatureCards;
