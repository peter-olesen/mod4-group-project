import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

import norseBackground from "../assets/images/norse_background.jpg";
import nineRealms from "../assets/images/nine_realms.jpg";
import asgard from "../assets/images/asgard.png";
import midgard from "../assets/images/midgard.jpg";
import jotunheim from "../assets/images/Jotunheim.jpg";

/* ========================
  The Norse Mythology Guide 
======================== */
export const NorseExtended = () => {
  return (
    <>
      <div className="mx-5 pt-5 flex justify-center flex-col ">
        <h1 className=" text-center font-newRocker text-fire text-3xl py-5 xs:text-base">
          {" "}
          Norse Mythology
        </h1>
        <div className="flex justify-center items-center ">
          <img
            className=" w-[450px] rounded-br-[50px]"
            src={norseBackground}
            alt=""
          />
        </div>

        <div className="py-10">
          <p className="font-montserrat leading-7 xs:text-sm">
            <span className="text-3xl xs:text-base font-modernAntiqua">
              Norse
            </span>{" "}
            mythology, rooted in the ancient beliefs of the Norse people from
            Scandinavia, is a deeply symbolic and vivid tapestry of gods,
            creatures, and cosmic mysteries. It encapsulates their understanding
            of the world, humanity’s place within it, and the eternal struggle
            between order and chaos. It is both grand and intimate, weaving
            tales of divine heroics alongside the raw, personal emotions of its
            gods and beings.
          </p>
        </div>
        <div className="py-5">
          <div className="flex justify-center items-center py-5 flex-col">
            <h2 className="font-newRocker text-fire text-2xl pb-4 xs:text-base">
              The Nine Realms
            </h2>
            <img
              className=" w-[450px] rounded-br-[50px]"
              src={nineRealms}
              alt=""
            />
          </div>

          <p className="font-montserrat leading-7 xs:text-sm">
            The Nine Realms in Norse mythology represent different worlds within
            the cosmos, all interconnected by the great World Tree, Yggdrasil.
            Each realm has its own unique characteristics, inhabitants, and role
            in the mythology.
          </p>
        </div>
        <div className="py-5 flex justify-center items-center flex-col ">
          <Accordion type="single" collapsible>
            <div className="flex justify-center items-center flex-col">
              <h2 className="py-5 font-newRocker text-fire text-2xl"> Asgard</h2>
              <img
                className=" rounded-br-[50px] w-[800px]"
                src={asgard}
                alt=""
              />{" "}
            </div>
            <AccordionItem value="item-1">
              <p className="pt-5 text-base font-montserrat leading-7 xs:text-sm">
                {" "}
                One of Norse mythology’s Nine Realms, Asgard was the home of the
                Aesir gods and a resting place for the dead. The mighty king
                Odin held court in Asgard. There, in the great halls of
                Valhalla, he was joined by Thor, Heimdall, and other Norse gods,
                as well as the souls of half of all warriors who died in battle.
                The other half went to Fólkvangr, a nearby meadow ruled by the
                goddess Freya. Asgard was connected to Midgard, the realm of
                humanity, via the Bifrost, a rainbow bridge guarded by Heimdall.
                As the home of the gods, Asgard was the preeminent realm in
                Norse mythology—a place of unearthly size, grandeur and beauty.
              </p>
              <AccordionTrigger>Read More</AccordionTrigger>

              <AccordionContent>
                <p className="pb-5 text-base font-montserrat leading-7 xs:text-sm">
                  <span className="text-xl font-bold">Etymology </span> <br />{" "}
                  The term “Asgard” (Old Norse: Ásgarðr) was derived from two
                  words: the Old Norse āss, meaning “god” (usually referring to
                  members of the Aesir tribe), and garðr, meaning “enclosure,”
                  “garden,” or “yard.” The latter indicated a certain isolation
                  from the outside world, which is fitting, as Asgard was
                  largely closed off from the other realms. An apt translation
                  of Asgard would be the “enclosure of the (Aesir) gods.” The
                  power of Asgard extended throughout the Nine Realms. A central
                  tenet of Norse religion was the notion that the Asgardians
                  cared for—and sometimes antagonized—the people of Midgard.{" "}
                  <br />
                  <br />
                  The rainbow Bifrost connected the two realms, allowing gods
                  such as Thor and Loki easy access to the mortal realm. <br />
                  The Asgardians also contended with the monstrous inhabitants
                  of Jotunheim, whom they loathed for being antithetical to them
                  in every way. <br />
                  Incursions into Jotunheim appeared frequently in Norse myth,
                  and almost always ended in Asgardian victory.
                  <br /> <br />
                  <span className="text-xl font-bold">Mythology</span> <br />
                  <span className="text-l font-medium">Origin Story</span>{" "}
                  <br />
                  <br />
                  Asgard’s early history was related in the Gylfaginning, part
                  of the Prose Edda, a compilation of Norse tales gathered by
                  Icelandic scholar Snorri Sturluson in the 13th century. In the
                  Gylfaginning, a Swedish king named Gylfi traveled to a place
                  he thought was Asgard (the gods deceived him into believing
                  this), where he was questioned about the history of the gods.
                  Using the name Gangleri, Gylfi’s answers made up the core of
                  the book.
                  <br />
                  <br /> According to Gangleri’s account, the existence of
                  Asgard was unquestioned in Norse thought—it simply existed, as
                  did the other Nine Realms, on the great world tree. Its
                  history was informed by the doings of the Aesir, and
                  especially those of the all-father Odin. In the early days,
                  Odin brought law and order to the golden realm of Asgard;
                  afterwards, he ordered the building of a town and two stout
                  halls.
                  <br /> <br />
                  Built in the field of Gladsheim, Vahalla was one of these
                  halls, and would become a great gathering place for the gods.
                  Sturluson’s work described Odin’s efforts in great detail: In
                  the beginning he established rulers, and bade them ordain
                  fates with him, and give counsel concerning the planning of
                  the town; that was in the place which is called Ida-field, in
                  the midst of the town. <br />
                  It was their first work to make that court in which their
                  twelve seats stand, and another, the high-seat which Allfather
                  himself has.
                  <br />
                  <br /> That house is the best-made of any on earth, and the
                  greatest; without and within, it is all like one piece of
                  gold; men call it Gladsheim. <br />
                  They made also a second hall: that was a shrine which the
                  goddesses had, and it was a very fair house; men call it
                  Vingólf. <br />
                  Next they fashioned a house, wherein they placed a forge, and
                  made besides a hammer, tongs, and anvil, and by means of
                  these, all other tools.
                  <br /> After this they smithied metal and stone and wood, and
                  wrought so abundantly that metal which is called gold, that
                  they had all their household ware and all dishes of gold.
                  <br />
                  <br />
                  <span className="text-xl font-bold">Pop Culture </span> <br />
                  Asgard has maintained a lively and persistent presence in
                  popular culture, largely thanks to Marvel’s Thor comics and
                  the Marvel Cinematic Universe (MCU). <br />
                  In the MCU films, Asgard appeared as a mythical realm floating
                  in space. This version of the region was beautifully rendered,
                  with a great palace (Valhalla) dominating a cityscape set in a
                  lush valley and surrounded by snow-capped mountains. <br />
                  <br />
                  This onscreen iteration of Asgard was eventually destroyed by
                  Surt, a fire giant with a flaming sword. With their home in
                  ruins, the Asgardians fled across the universe and eventually
                  created a “New Asgard” in Norway. Asgard has lent its name to
                  many other fantasy worlds.
                  <br />
                  It appeared as a city in the world of Conan the Barbarian, as
                  a race of beings in the Stargate series, and as an Outer Plane
                  in Dungeons and Dragons. <br />
                  <br />
                  The realm’s name has also been adopted by a German brewery
                  (Asgaard), as well as several bands. The name has even been
                  used to refer to a natural gas formation in Norway. Asgard
                  appears frequently in geographic nomenclature.
                  <br /> Among those places named for the fabled realm are:
                  <br />
                  <ul className="list-disc pl-10">
                    <li>
                      Asgard Peak (Valhalla Range, British Columbia, Canada)
                    </li>
                    <li>Mount Asgard (Baffin Island, Canada) </li>
                    <li>The Asgard Range (Antarctica) </li>
                    <li>The Asgard Pass (Cascades, Washington state)</li>
                  </ul>
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <h2 className="py-5 font-newRocker text-fire text-2xl text-center " > Midgard</h2>
            <div className="flex justify-center items-center  flex-col">
              <img
                className=" rounded-br-[50px] w-[800px]"
                src={midgard}
                alt=""
              />{" "}
            </div>
            <AccordionItem value="item-1">
              <p className="pt-5 text-base font-montserrat leading-7 xs:text-sm">
                {" "}
                One of the Nine Realms in Norse cosmology, Midgard was the world
                of human beings. The "middle enclosure," Midgard sat in the
                middle of the world tree Yggdrasil, a structure that housed all
                Nine Realms. This central loction was symbolic of Midgard's
                position between the civilized order of Asgard and the untamed
                wilds of Jotunheim. Though constantly striving toward
                perfection, the humans of Midgard would never achieve it.
              </p>
              <AccordionTrigger>Read More</AccordionTrigger>

              <AccordionContent>
                <p className="text-base font-montserrat leading-7 xs:text-sm">
                  <span className="text-xl font-bold">Etymology </span> <br />{" "}
                  The name “Midgard” (Old Norse: miðgarðr) was derived from the
                  word mið, meaning “mid” or “middle,” and the word garðr,
                  meaning an “enclosure,” “garden,” or “yard.” As the “middle
                  enclosure,” Midgard was located halfway up Yggdrasil, and
                  served as a symbolic meeting ground for lawful order and
                  lawless chaos. <br />
                  <br />
                  <span className="text-xl font-bold">Mythology</span> <br />
                  <span className="text-l font-medium">Origin Story</span>{" "}
                  <br />
                  <br />
                  Midgard's origins were well documented across a number of
                  sources, including the Gylfaginning, of the Prose Edda. <br />
                  This text stated that in ancient times, when the world was
                  forming, fire and ice merged to form the giant Ymir. <br />
                  An asexual hermaphrodite, Ymir produced the jotunn within his
                  sweaty armpits.
                  <br />
                  <br /> Much like the jotunn he produced, Ymir was cruel and
                  warlike. Unable to tolerate such behavior, the first gods
                  murdered him and created Midgard from his corpse, using his
                  flesh to form the earth, his bones to make the trees, and his
                  brain to make the clouds. Sturluson described the process in
                  the Grímnismál, of the Poetic Edda: <br />
                  <br />
                  <span className="italic">
                    Out of Ymir's flesh was fashioned the earth, And the ocean
                    out of his blood; Of his bones the hills, of his hair the
                    trees, Of his skull the heavens high. Mithgarth the gods
                    from his eyebrows made, And set for the sons of men; And out
                    of his brain the baleful clouds They made to move on high.{" "}
                    <br />
                    <br />
                  </span>
                  Having completed Midgard, the gods moved on to creating
                  humankind, starting with the male Ask and female Embla. In the
                  beginning, Ask and Embla were thoughless and emotionless
                  husks, though they would not stay that way for long. According
                  to the Völuspá, three Asgardian deities soon imbued them with
                  sense, desire, and intelligence:
                  <br />
                  <br /> Then from the throng did three come forth, From the
                  home of the gods, the mighty and gracious; Two without fate on
                  the land they found, Ask and Embla, empty of might. Soul they
                  had not, sense they had not, Heat nor motion, nor goodly hue;
                  <br /> Soul gave Othin, sense gave Hönir, Heat gave Lothur and
                  goodly hue. <br />
                  <br />
                  <span className="font-bold text-l">
                    Thor and the Serpent of Midgard
                  </span>
                  <br />
                  <br />
                  In Norse mythology, Midgard was famous as the battleground
                  between Thor, defender of Midgard, and Jörmungandr, the World
                  Serpent who plagued its oceans.
                  <br /> Jörmungandr was a jötunn, one of the monstrous children
                  of Loki and his giant lover Angrboda. Appearing in the
                  Hymiskviða, of the Poetic Edda, the myth began with Thor
                  heading for Midgard to locate a cauldron large enough to brew
                  beer for all the gods. <br />
                  Upon reaching the realm, Thor located Hymir, a giant who
                  possessed such a cauldron. Their drunken adventure ended with
                  a climactic confrontation between Thor and the monstrous sea
                  creature. <br />
                  <br />
                  The encounter occurred on a fishing trip. Hymir and Thor
                  ventured out into the sea, using the heads of Hymir’s oxen as
                  bait. While Hymir caught whales, Thor ensnared none other than
                  the Midgard Serpent itself. <br />
                  Thor hurled the serpent onto the deck of the ship and smashed
                  him with Mjölnir. <br />
                  Though a break in the text leaves the rest of the fight to the
                  imagination, the tale ended with Jörmungandr wriggling free to
                  fight another day:
                  <br />
                  <br /> The venomous serpent swiftly up To the boat did Thor,
                  the bold one, pull; With his hammer the loathly hill of the
                  hair Of the brother of Fenrir he smote from above. The
                  monsters roared, and the rocks resounded, And all the earth so
                  old was shaken; .... Then sank the fish in the sea forthwith.{" "}
                  <br />
                  <br />
                  Thor’s battles with Jörmungandr suggest that Midgard was a
                  battleground for the forces of good and evil.
                  <br />
                  That Thor never vanquished the beast demonstrates that Midgard
                  would never be wholly assimilated into the civilized order
                  that defined Asgard. <br />
                  <br />
                  <span className="font-bold text-l">
                    Midgard and Ragnarök{" "}
                  </span>{" "}
                  <br />
                  <br />
                  Like the rest of creation, Midgard was fated to be destroyed
                  during Ragnarök, the Norse apocalypse. According to the
                  prophecies, Midgard would be shattered by a final
                  confrontation between Thor and Jörmungandr that would result
                  in the serpent's death. Thor's victory over the beast would be
                  short lived, however, as he would fall dead just nine steps
                  from the monster’s corpse:
                  <br />
                  <br />
                  Against the serpent goes Othin's son. <br />
                  In anger smites the warder of earth,— Forth from their homes
                  must all men flee;- Nine paces fares the son of Fjorgyn, And,
                  slain by the serpent, fearless he sinks. <br />
                  <br />
                  Thor’s death would unleash a cataclysm upon Midgard, causing
                  flames to devour the world:
                  <br />
                  <br />
                  The sun turns black, earth sinks in the sea, The hot stars
                  down from heaven are whirled; Fierce grows the steam and the
                  life-feeding flame, Till fire leaps high about heaven itself.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <h2 className="py-5 font-newRocker text-fire text-2xl text-center"> Jotunheim</h2>
            <div className="flex justify-center items-center flex-col">
              <img
                className=" rounded-br-[50px] w-[800px]"
                src={jotunheim}
                alt=""
              />{" "}
            </div>
            <AccordionItem value="item-1">
              <p className="pt-5 text-base font-montserrat leading-7 xs:text-sm">
                {" "}
                One of the Nine Realms in Norse cosmology, Jotunheim was the
                land of the jötunn—non-human, non-divine creatures such as
                giants and trolls. <br />
                Jotunheim's chaotic nature ensured the realm was constantly at
                odds with Asgard. <br />
                The civilized gods despised the wild jötunn, and the two races
                fought endlessly. <br />
                Whenever Jotunheim was mentioned, conflict was sure to follow.
                Jotunheim's capital was Utgard, a massive castle with a name
                meaning "beyond the fence." <br />
                The realm's other notable locations included Mimir’s well,
                Thrymheim, and the Vimur River.
              </p>
              <AccordionTrigger>Read More</AccordionTrigger>

              <AccordionContent>
                <p className="text-base font-montserrat leading-7 xs:text-sm">
                  <span className="text-xl font-bold">Etymology </span> <br />
                  <br /> Derived from the Old Norse words for ”home“ and
                  “jötunn,” Jotunheim meant “home of the jötunn.”
                  <br />
                  <br />
                  <span className="text-xl font-bold">Mythology</span> <br />
                  <br />
                  <span className="text-l font-medium">
                    Idun and the Magic Apples
                  </span>{" "}
                  Jotunheim served as an important setting in several Norse
                  myths. One such tale—that of Idun and her magical
                  apples—appeared in Snorri Sturluson's Skáldskaparmál of the
                  Prose Edda. <br />
                  While exploring Jotunheim, Loki angered the jötunn Thjazi and
                  soon found himself in the shapeshifter's talons. In exchange
                  for his release, Loki promised to bring Thjazi the goddess
                  Idun and her youth-granting apples.
                  <br /> Upon returning to Asgard, Loki lured Idun to the
                  forest, where the shapeshifter (in the form of an eagle)
                  whisked her away to Jotunheim. <br />
                  <br />
                  The Asgardian gods depended on Idun's apples to maintain their
                  youth. When they learned of Loki’s treachery, they threatened
                  him with death unless he managed to bring Idun back.
                  <br /> After borrowing Freya’s falcon-feather cloak, Loki flew
                  off to Thjazi's palace in Jotunheim, where Idun was sitting
                  all alone. <br />
                  Acting quickly, Loki transformed the goddess into a nut and
                  delivered her (and her apples) to Asgard and the shelter of
                  the gods: <br />
                  <br />
                  <span className="italic">
                    And when he got the hawk‘s plumage, he flew north into
                    Jötunheim, and came on a certain day to the home of Thjazi
                    the giant. Thjazi had rowed out to sea, but Idunn was at
                    home alone: Loki turned her into the shape of a nut and
                    grasped her in his claws and flew his utmost.
                  </span>{" "}
                  <br />
                  <br />
                  <span className="font-bold text-l">
                    Thor, the Lovely Bride
                  </span>{" "}
                  <br />
                  <br /> Jotunheim was also featured in a story involving the
                  theft of Thor’s hammer Mjölnir. Told in the Þrymskviða of the
                  Poetic Edda, the story began when Thor awoke to find his
                  beloved hammer missing. In a panic, he assembled the gods and
                  asked for their help in finding it. <br />
                  Loki immediately borrowed Freya's falcon-feather cloak and
                  raced off to Jotunheim, where he spied Mjölnir in the hands of
                  the giant Thrym. In exchange for the hammer's safe return,
                  Thrym demanded Freya’s hand in marriage. <br />
                  <br />
                  The gods found this proposition unacceptable. As they debated
                  alternative ways to retrieve the hammer, Heimdall hatched a
                  scheme: dressed as Freya and her handmaiden, Thor and Loki
                  would sneak into Jotunheim and take back the hammer.
                  <br />
                  <br />
                  After much convincing, Thor reluctantly donned the bridal veil
                  and the gods made haste to Jotunheim:
                  <span className="italic">
                    Then home the goats to the hall were driven, They wrenched
                    at the halters, swift were they to run; The mountains burst,
                    earth burned with fire, And Othin's son sought Jotunheim.
                  </span>
                  <br />
                  <br /> After several days of hard riding, the two haggard
                  crossdressers entered Thrym’s hall (better known as
                  Thrymheim). When Thrym noticed "Freya’s" worn appearance, Loki
                  asked him to pardon the maiden's condition:
                  <br />
                  <br />
                  <span className="italic">
                    Hard by there sat the serving-maid wise, So well she
                    answered the giant's words: ‘From food has Freyja eight
                    nights fasted, So hot was her longing for Jotunheim.’
                    <br />
                    <br />
                  </span>
                  In due time, the wedding ceremony commenced. When Thrym
                  brought forth Mjölnir to consecrate the marriage, Thor seized
                  his weapon and killed the entire wedding party, leaving grand
                  Thrymheim drenched in blood.
                  <br />
                  <br />
                  <span className="font-bold text-l">
                    Thor, a Jotunheim Regular
                  </span>{" "}
                  <br />
                  <br />
                  Thor returned to Jotunheim under similar circumstances in the
                  Thorsdrapa, a work by the 10th century CE skaldic poet Eilífr
                  Goðrúnarson. One day, Loki was visiting Jotunheim when he was
                  captured by a giant named Geirrod. This giant despised Thor,
                  and offered to release Loki on the condition he lure the hero
                  to Jotunheim without his magical talismans. <br />
                  <br />
                  Agreeing to the giant's demands, Loki returned to Asgard and
                  told Thor of the beauty of Geirrod’s daughters, Gjalp and
                  Greip. Intrigued, Thor consented to go and see them, leaving
                  his beloved hammer Mjölnir and his girdle of strength behind.
                  <br />
                  <br />
                  Once in Jotunheim, Loki and Thor happened to stop at the home
                  of the giantess Grid, who warned Thor of the plot against him.
                  Seeing that he lacked his usual armaments, she also loaned him
                  a pair of iron gloves, a belt, and a magical staff. <br />
                  Thor used these weapons to turn the tables on Geirrod,
                  murdering him and his daughters before fleeing Jotunheim in
                  triumph once again. <br />
                  <br />{" "}
                  <span className="font-bold text-l">
                    Jotunheim in the Beginning and the End
                  </span>
                  <br />
                  <br />
                  In addition to Thrymheim and Utgard, the realm of Jotunheim
                  was home to Mimir’s well, a spring located near the roots of
                  Yggdrasil.
                  <br /> The well's waters granted wisdom to anyone who drank of
                  them, and it was for this reason that Mimir’s well played a
                  key role in Norse lore. <br />
                  According to the Völuspá of the Poetic Edda, Odin traveled to
                  Jotunheim in search of wisdom. <br />
                  Upon arriving at Mimir’s well, he pulled out one of his eyes
                  and cast it into the shaft, where Mimir drank its mead
                  everyday: <br />
                  <br />
                  <span className="italic">
                    Alone I sat when the Old One sought me, The terror of gods,
                    and gazed in mine eyes:
                    <br /> ‘What hast thou to ask? why comest thou hither?
                    Othin, I know where thine eye is hidden.’ I know where
                    Othin's eye is hidden, Deep in the wide-famed well of Mimir;
                    Mead from the pledge of Othin each mom Does Mimir drink:
                    would you know yet more? <br /> <br />
                  </span>
                  The Völuspá also predicted that during Ragnarök, the series of
                  events leading to the end of all things, Jotunheim would
                  tremble with expectation and release its monsters unto the
                  world: <br />
                  <br />
                  <span className="italic">
                    In their dwellings at peace they played at tables, Of gold
                    no lack did the gods then know,— Till thither came up
                    giant-maids three, Huge of might, out of Jotunheim.
                  </span>
                  <br />
                  <br />
                  All the creatures of Jotunheim, including the fire giant Surt,
                  would come swarming out of the realm to do battle with the
                  gods on the plains of Asgard. <br />
                  Jotunheim and the other realms would ultimately turn to ash
                  and be annihilated with all creation.
                  <br />
                  <br />
                  <span className="text-xl font-bold">Pop Culture </span> <br />
                  <br />
                  Jotunheim has maintained a small presence in popular culture,
                  largely thanks to both Marvel Comics and the Marvel Cinematic
                  Universe. Thor (2011) featured a plotline involving Jotunheim,
                  here portrayed as a bleak and icy realm. <br />
                  <br />
                  The film began with a rogue band of frost giants breaking into
                  Asgard’s vault and attempting to steal a magical item. <br />
                  Not willing to stand for such insolence, Thor lead a team to
                  Jotunheim to confront Laufey, king of the frost giants.
                  <br />
                  Thor's mission destroyed a hard-won peace between the frost
                  giants and the Asgardians, and Odin banished him to Midgard
                  (Earth) for his recklessness.
                  <br />
                  <br />
                  Antarctica's Jotunheim Valley was named for the Norse realm.
                  It is surrounded by a mountain known as Utgard Peak, itself
                  located in the Asgard Range.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};
