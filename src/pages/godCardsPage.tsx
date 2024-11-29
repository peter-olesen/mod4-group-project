import NorseGodCards from "@/components/api_norse_myth/cards";
import { NavBarComponent } from "@/components/hamburgerMenu/hamburger";
import ContentButton from "@/components/ui/content_button";
import { Footer } from "@/components/Footer/footer";
import { useState } from "react";
import CreatureList from "@/components/api_norse_myth/creatureList";

const GodCardsPage = () =>{
  const [activeComponent, setActiveComponent] = useState<"gods" | "creatures">("gods")
  return(
    <>
      <NavBarComponent></NavBarComponent>
      <h1 className="flex justify-center mt-16 font-newRocker text-3xl">Norse Gods</h1>
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

      <Footer/>
    </>
  )
}

export default GodCardsPage