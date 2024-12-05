
import CreatureCards from "@/components/api_norse_myth/Cards";

const SagaList = () => {


const Sagas = [
    {
        name: "Dropplaugarsona Saga", about: "Droplaugarsona Saga is an Icelandic family saga that tells the story of early settlers in medieval Iceland. Though shorter and lesser-known than sagas like Njáls Saga or Egils Saga, it provides valuable insight into the lives and moral codes of Iceland's early inhabitants." 
    },
    {
        name: "The Deacon of Dark River", about: "The Deacon of Dark River is one of Iceland's most famous ghost stories, about a deacon who dies suddenly before Christmast and returns as a ghost to fetch his beloved. It's haunting tale involving themes of love, loss, and the supernatural." 
    },
    {
        name: "Mountain-Eyvindur", about: "Fjalla-Eyvindur and Halla are infamous Icelandic outlaws who lived in the 18th century. They fled to the mountains, evading capture by authorities, and became legendary for their survival in harsh conditions." 
    },
    {
        name: "Gryla", about: "Grýla is a giantess in Icelandic folklore, known for kidnapping and eating naughty children. She lives in the mountains with her husband and her many children, the Yule Lads." 
    },
    {
        name: "The Yule Lads", about: "The Yule Lads are mischievous figures in Icelandic Christmas tradition. They are 13 brothers who visit children during the 13 nights leading up to Christmas, each with their own unique prank.t into the lives and moral codes of Iceland's early inhabitants." 
    },
    {
        name: "The Lake Worm of Lagarfljót", about: "The Lake Worm of Lagarfljót is a legendary serpent said to live in Lagarfljót lake in eastern Iceland. Sightings of the creature have sparked intrigue and are part of Icelandic mythology." 
    },
    {
        name: "Trolls", about: "Trolls are large, fearsome creatures in Norse and Icelandic folklore. Known for their strength, they often live in mountains or caves and are dangerous to humans, particularly if encountered at night." 
    },
    {
        name: "Búkolla", about: "Búkolla is a giantess in Icelandic folklore, sometimes described as an ogress. She is known for her strength and for being a fearsome protector of her domain." 
    },
    {
        name: "The Land Wights of Iceland", about: "Landvættir are the spirit beings believed to protect Iceland's natural features, like mountains and rivers. There are four primary landvættir representing different regions, and they are considered guardians of the land." 
    },
    {
        name: "Bandamanna Saga", about: "Bandamanna Saga is one of the lesser-known Icelandic sagas, part of the Íslendingasögur. It is notable for being the only saga where commoners, rather than chieftains or kings, are at the front of the story. Set in the 11th century, the narrative centers around themes of loyalty, betrayal, and power struggles among farmers in Iceland." 
    },
    {
        name: "Egils Saga", about: "Egil’s Saga is a medieval Icelandic saga that recounts the life of Egil Skallagrimsson, a complex Viking poet, warrior, and farmer. Written in the 13th century and attributed to Snorri Sturluson, the saga opens several generations, beginning with Egil’s grandfather Kveldulf and father Skallagrim." 
    },
    {
        name: "Hrafnkels Saga", about: "Hrafnkels Saga is set in the Viking Age, focusing on the themes of power, honor and the complex nature of justice. The story centers around Hrafnkel, a proud and powerful chieftain known for his devotion to the god Freyr and for owning a prized stallion named Freyfaxi. nning with Egil’s grandfather Kveldulf and father Skallagrim." 
    },
    {
        name: "Brennu-Njáls Saga", about: "Brennu-Njáls Saga also known as The Story of Burnt Njáll, is one of the most famous sagas from the medieval Iceland, compose in the 13th century. It centers around themes of honor, vengeance, and the complex social codes of medieval Norse society." 
    },
    {
        name: "The Hidden People", about: "The Huldufólk (Hidden People) are mystical beings in Icelandic folklore, living in rocks and hills. They can be kind or vengeful, depending on how humans treat them." 
    },
    {
        name: "Grettis Saga", about: "Grettis Saga is set in the viking age, it recounts the life and exploits of Grettir Ásmundarson, a complex and tragic hero known for his immense strength, courage, and rebellious nature." 
    },
   
]
return (
    <>
    <div>
        {Sagas.map((saga,index)=>(
            <CreatureCards 
            key={saga.name+index}
            name={saga.name}
            about={saga.about}
            index={index}
            />
        ))}
    </div>
    </>
)
}

export default SagaList