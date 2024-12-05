import ContentButton from "../ui/content_button";
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
import { useEffect, useState } from "react";
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
    berserker: berserker,
    nidhogg: nidhogg,
    valkyrie: valkyrie,
    fenrir: fenrir,
    ymir: ymir,
    sleipnir: sleipnir,
    rataroskr: rataroskr,
    jormungand: jormungand,
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
