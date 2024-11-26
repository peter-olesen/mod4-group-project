import NorseGodCards from "@/components/api_norse_myth/cards";
import { NavBarComponent } from "@/components/hamburgerMenu/hamburger";
import ContentButton from "@/components/ui/content_button";

const GodCardsPage = () =>{
  
  return(
    <>
      <NavBarComponent></NavBarComponent>
      <div className="flex my-28">
        <ContentButton content="Creatures"></ContentButton>
        <ContentButton content="Gods"></ContentButton>
      </div>  
      <NorseGodCards name=""></NorseGodCards>
    </>
  )
}

export default