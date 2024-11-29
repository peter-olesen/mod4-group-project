import NorseGodCards from "@/components/api_norse_myth/cards";
import ContentButton from "@/components/ui/content_button";
import { useState } from "react";
import CreatureList from "@/components/api_norse_myth/creatureList";


const GodCardsPage = () =>{
  const [activeComponent, setActiveComponent] = useState<"gods" | "creatures">("gods")
  return(
    <>
      
       <h1 className="flex flex-col justify-center items-center mt-16 font-newRocker text-3xl">
        {activeComponent === "gods" ? (
          "Norse Gods") : (
            <>
            <span>Creatures</span>
            <span className="text-lg font-semibold mt-2 font-modernAntiqua ">Power of Wisdom, War and Nature </span>
          </>)}
       </h1>
      
      <div className="flex my-24">
        <ContentButton 
        content="Gods"
        onClick={()=>setActiveComponent("gods")}
        />
        <ContentButton 
        content="Creatures"
        onClick={()=>setActiveComponent("creatures")}
        />
      </div>  

      <div>
        {activeComponent === "gods" ? (
          <NorseGodCards name="odin"/>
        ) : (
          <CreatureList/>
        )
        }
      </div>
    </>
  )
}

export default GodCardsPage