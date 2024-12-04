/*
================================
EVERYTHING THAT IS COMMENTED OUT IN IMG AND CUSTOMIMAGES ARE IMGS WE NEED IF WE GET THEM THEN WE CAN COMMENT THEM OUT
AND WATCH OUT TO CHANGE TO JPG OR PNG WHERE APPROPRIATE - OR WE DONT HAVE THEM BUT THEN THE API WILL TAKE CARE
OF THOSE IMG
================================
*/ 

import { useEffect, useState } from "react";
import ContentButton from "../ui/content_button";
import odinImg from "../../assets/images/formated/Odin.png";
import friggImg from "../../assets/images/formated/Frigg.png";
import thorImg from "../../assets/images/Thor.jpg";
import freyjaImg from "../../assets/images/formated/Freyja.png";
import lokiImg from "../../assets/images/loki.jpg";
import baldurImg from "../../assets/images/formated/Baldur.png";
import heimdallImg from "../../assets/images/formated/Heimdall.png";
import idunImg from "../../assets/images/idun.png";
import freyrImg from "../../assets/images/freyr.jpg";
import nerthusImg from "../../assets/images/nerthus.png"
import tyrImg from "../../assets/images/formated/Tyr.png";
import njordImg from "../../assets/images/njord.png";
import { Link } from "react-router-dom"

/*====================================
Defining the structure of a god object
====================================*/ 

type God = {
  __typename: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  image?: {
    url: string;
    title: string;
  };
};

const NorseGodCards = ()=>{
  /*=============
    Get the API
  =============*/

  const [gods, setGods] = useState<God[]>([]);
  useEffect(() => {
    const getData = async () => {
      const godUrl = "https://mod4-backend.onrender.com/odin";
      const r = await fetch(godUrl);
      const json = await r.json();
      setGods(json.pageProps.topic.collections?.items[0]?.resources?.items || []);
    };
    getData();
  }, []);
  
  /*==============
    Get the images
  ==============*/

  const customImages: Record<string, string> = {
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
    njord: njordImg
  }
  return(
    <>
      
      {/*=========
           CARDS
         =========*/} 

      <div>
      {gods.length > 0 ? (
        gods.map((god: God) => (
          <div key={god.slug} className="card flex flex-col items-center justify-center my-16 border-b-2 pb-16 mx-5" >
              {(customImages[god.slug] || god.image?.url) && (
              <img 
              src={customImages[god.slug] || god.image?.url} 
              alt={god.image?.title || god.title} width="200" 
              className="h-60 w-40 rounded-br-[50px] object-cover pb-5"/>
            )}
            <h2 className="font-semibold text-xl pb-5 font-montserrat">{god.title}</h2>
            
            <p className="font-montserrat">{god.tagline}</p>
            <div className=" mt-7">
              <Link to={`/gods-creatures/${god.title}`}>
                <ContentButton content="See More"></ContentButton>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className="flex justify-center mb-16">Loading gods...</p>
      )}
      </div>
    </>
  )
}
export default NorseGodCards