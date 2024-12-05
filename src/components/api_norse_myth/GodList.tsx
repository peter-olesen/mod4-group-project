
import { useEffect, useState } from "react";
import CreatureCards from "./Cards";

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
  

  
  return(
    <>
      
      {/*=========
           CARDS
         =========*/} 

      <div>
      {gods.length > 0 ? (
        gods.map((god: God,index) => (
          
          <CreatureCards
          key={god.slug+index}
          name={god.title}
          about={god.tagline}
          imgsrc={god.image?.url} 
          index= {index}
          baseUrl={"/gods-creatures/"} 
          />
          


        ))
      ) : (
        <p className="flex justify-center mb-16">Loading gods...</p>
      )}
      </div>
    </>
  )
}
export default NorseGodCards

         