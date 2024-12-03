import ContentButton from "../ui/content_button"
import berserker from "../../assets/images/formated/Berserker.png"
import nidhogg from "../../assets/images/formated/Nidhogg.png"
import valkyrie from "../../assets/images/formated/Valkyrie.png"
import fenrir from "../../assets/images/formated/Fenrir.png"
import ymir from "../../assets/images/formated/Ymir.png"
import sleipnir from "../../assets/images/formated/Sleipnir.png"
import rataroskr from "../../assets/images/formated/Ratatoskr.png"
import jormungand from "../../assets/images/formated/Jormungand.png"

/*
======================================================================
THE COMPONENT GOES THROUGH CREATURELIST.TSX AND THAT IS PUT IN APP.TSX
======================================================================
*/

type Props = {
  name: string,
  about: string,
}
const CreatureCards = ({ name, about }: Props) =>{

  /* ==============
    Imported Images
  ============== */
  const creatureImages: Record<string, string> = {
    berserker: berserker,
    nidhogg: nidhogg,
    valkyrie: valkyrie,
    fenrir: fenrir,
    ymir: ymir,
    sleipnir: sleipnir,
    rataroskr: rataroskr,
    jormungand: jormungand
  } 

  const imgUrl = creatureImages[name.toLowerCase()];

  return (
    <>
    {/*========
      The Cards
    ========*/}
      <div className="card flex flex-col items-center justify-center my-16 border-b-2 pb-16 mx-5" > 
          {imgUrl && (
            <img 
            src={imgUrl} 
            alt={name} 
            width="200"
            className="h-60 w-40 rounded-br-[50px] pb-5"
            />
          )}
          
          <h2 className="font-semibold text-xl pb-5 font-montserrat">{name}</h2>
            
          <p className="font-montserrat">{about}</p>
          <div className=" mt-7">
            <ContentButton content="See More"></ContentButton>
          </div>
        </div>
    </>
  )
}
export default CreatureCards