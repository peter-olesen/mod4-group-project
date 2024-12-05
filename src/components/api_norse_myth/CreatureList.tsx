import CreatureCards from "./Cards";
import React from "react";
const CreatureList = () => {
  /*
  ===================
  HARDCODED CREATURELIST
  ===================
  */
  const creatures = [
    {
      name: "Berserker",
      about:
        "Berserkers were elite Viking warriors, part of a fearsome cult that harnessed the power of animals. Known for their fearlessness and boundless fury in battle, they inspired terror, with some even speculating they were shapeshifters.",
    },
    {
      name: "nidhogg",
      about:
        "Nidhogg is a ferocious dragon who gnaws at the roots of Yggdrasil, the tree which supports the nine worlds of Norse mythology. This power-hungry monster is sometimes referred to as “the Malice Striker,” an appropriate name given that he rules over dark criminals and is bent on destroying peace and virtue.",
    },
    {
      name: "Valkyrie",
      about:
        "A Valkyrie is a mortal woman who has had magnificent powers bestowed on her by Odin. These women are responsible for watching over battlefields and collecting the best of the best warriors to make up Odin’s army, which he will unleash during Ragnarok.",
    },
    {
      name: "Fenrir",
      about:
        "Fenrir is a giant, fearsome wolf in Norse mythology, the son of the trickster god Loki and the giantess Angrboða. Known for his immense strength, Fenrir was prophesied to play a key role in Ragnarök, the end of the world, where he is destined to kill Odin.",
    },
    {
      name: "Ymir",
      about:
        "In Norse mythology, Ymir is known as the first being. He was a giant created from drops of water that formed when the ice of Niflheim mixed with the heat of Muspelheim. He was considered the father of all ice giants. The Norse creation narrative says that his hermaphroditic body produced beings that would go on to bear countless generations. His journey ended in tragedy, but because of his evil nature, no one can feel pity for the giant. His demise led to the creation of humans and the Earth.",
    },
    {
      name: "Sleipnir",
      about:
        "Sleipnir is Odin’s valiant steed, “the best among horses.” He carries the leader of the Norse gods on many quests, and he never fails to leave common men awestruck by his strength and speed.",
    },
    {
      name: "Rataroskr",
      about:
        "Scurrying up and down the Norse tree of life is Ratatoskr, a squirrel with a taste for mischief. Ratatoskr may have big responsibilities as a messenger for the gods, but he doesn’t accept his duties meekly. This crafty squirrel puts his own spin on his role.",
    },
    {
      name: "Jormungand",
      about:
        "In the depths of the ocean, a giant serpent named Jormungandr is biding his time. Prophecies tell us that he will merge at the end of time to destroy the Nine Worlds of Norse mythology, but for now, he is merely waiting…",
    },
  ];

  /*============================
  Mapping through the list above
  ============================*/
  return (
    <>
      <div>
        {creatures.map((creature,index) =>(
          <CreatureCards
          key={creature.name+index}
          name={creature.name}
          about={creature.about}
          />
        ))}
      </div>
    </>
  );
};

export default CreatureList;
