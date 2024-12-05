
import CreatureCards from "@/components/api_norse_myth/Cards";

const SagasList = ()=>{

  const sagas = [
    {
      name:"Droplaugarsona Saga", 
      about:"Droplaugarsona Saga is an Icelandic family saga that tells the story of early settlers in medieval Iceland. Though shorter and lesser-known than sagas like Njáls Saga or Egils Saga, it provides valuable insight into the lives and moral codes of Iceland's early inhabitants. "
    },
    {
      name:"The Deacon of Dark River", 
      about:"The Deacon of Dark River is one of Iceland’s most famous ghost stories, about a deacon who dies suddenly before Christmas and returns as a ghost to fetch his beloved. It’s a haunting tale involving themes of love, loss, and the supernatural"
    },
    {
      name:"Mountain-Eyvindur", 
      about:"Fjalla-Eyvindur and Halla are infamous Icelandic outlaws who lived in the 18th century. They fled to the mountains, evading capture by authorities, and became legendary for their survival in harsh conditions."
    },
    {
      name:"Gryla", 
      about:"Grýla is a giantess in Icelandic folklore, known for kidnapping and eating naughty children. She lives in the mountains with her husband and her many children, the Yule Lads."
    },
    {
      name:"The Yule Lads", 
      about:"The Yule Lads are mischievous figures in Icelandic Christmas tradition. They are 13 brothers who visit children during the 13 nights leading up to Christmas, each with their own unique prank.t into the lives and moral codes of Iceland's early inhabitants."
    },
    {
      name:"The Lake Worm of Lagarfljót", 
      about:"The Lake Worm of Lagarfljót is a legendary serpent said to live in Lagarfljót lake in eastern Iceland. Sightings of the creature have sparked intrigue and are part of Icelandic mythology."
    },
    {
      name:"Trolls", 
      about:"Trolls are large, fearsome creatures in Norse and Icelandic folklore. Known for their strength, they often live in mountains or caves and are dangerous to humans, particularly if encountered at night."
    },
  ]

  return (
    <>
      <div>
        {sagas.map((saga,index) =>(
          <CreatureCards
          key={saga.name+index}
          name={saga.name}
          about={saga.about}
          />
        ))}
      </div>
    </>
  )
}
export default SagasList