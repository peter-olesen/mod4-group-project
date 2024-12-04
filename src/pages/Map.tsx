import React, { useState } from "react";
import MapofIceland from "../assets/images/iceland_amo_2020226_lrg.jpg";

import { Tooltip as ReactTooltip } from "react-tooltip";

type Region = {
  id: string;
  name: string;
  description: string; 
  color: string;
  geolocation?: string;
  position: string;
};

export const Map = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  const regions: Region[] = [
    {
      id: "north",
      name: "Northern Iceland",
      description: `The sagas of Northern Iceland are steeped in themes of heroism, supernatural encounters, and dramatic family feuds. This region is renowned for stories like the Saga of Grettor the Strong, which portrays Grettir as an outlaw who battles ghosts and demonstrates immense resilience in the harsh Icelandic landscape. The area's fjords and rugged terrain often serve as evocative backdrops for tales blending human conflict with elements of Norse mythology. These sagas, passed down orally before being written in the 13th century, preserve a vidid tapestry of Iceland's historical and cultural identity.`,
      color: "bg-blue-500",
      position: "top-[20%] left-[40%]",
    },
    {
      id: "south",
      name: "Southern Iceland",
      description:
        "The sagas from Southern Iceland are deeply rooted in the region's dramatic landscapes of glaciers, volcanoes, and fertile lowlands. These stories often focus on the themes of heroism, betrayal, and family feuds, reflecting the social dynamics of medieval Iceland. The are is particularly noted for sagas like Njáls Saga, set in the southern plains, which explores legal disputes, honor, and revence agains the backdrop of Icelands's early legal system. Folklore from this region also features supernatural beings like elves, trolls, and hidden people, blending historical narratives with mythological elements",
      color: "bg-red-500",
      position: "bottom-[10%] right-[40%]",
    },
    {
      id: "east",
      name: "East Iceland",
      description:
        "Sagas from East Iceland often revolve around the region's dramatice landscapes and the lives of its early settlers. These narratives feature themes of survival, feuds, and superntural encounters, with tales such as those found in Hrafnkels Saga. The saga highlights loyalty, revence, and the balance between fate and free will, offering a rich portrayal of Icelandic soiety during the Settlement Era. East Iceland's sagas also reflect the cultural significance of its fjords and remote highlands, adding a unique geographical and mythological flavor to the storytelling.",
      color: "bg-orange-500",
      position: "bottom-[50%] left-[80%]",
    },
    {
      id: "west",
      name: "West Iceland",
      description:
        "Sagas from West Iceland are among the most famous in Icelandic literature, often featuring tales of settlers, chieftains, and conflicts rooted in honor and family feuds. Prominent examples include the Eyrbyggja Saga, which tells of the early settlement and power struggles of Snæfellsnes Peninsula, and the Laxdæla Saga, a story of love, betrayal, and rvence centered on Guðrún Ósvífursdóttir and her entangled relationships. These sagas combine historical events with mythical elements, showcasing themes of resilience and the harsness of life in medieval Iceland.",
      color: "bg-pink-500",
      position: "bottom-[50%] right-[90%]",
    },
  ];

  const handleRegionClick = (region: Region) => {
    setSelectedRegion(region);
  };
  return (
    <div>
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80 mt-10 animate__animated animate__flipInX text-fire">
        History of Icelandic Folklore
      </h1>
      <div className="relative">
        <img src={MapofIceland} alt="Map of Iceland" className="w-full mt-20" />
        {/* Example of clickable regions */}
        {regions.map((region, index) => (
          <div
            className={`absolute w-[4%] h-[4%] opacity-80 cursor-pointer rounded-full ${
              region.color
            } ${region.position} ${
              selectedRegion?.id === region.id ? "animate-pulse" : ""
            }`}
            data-tip={region.description}
            onClick={() => handleRegionClick(region)}
            title={region.name}
            key={index}
          />
        ))}
        <ReactTooltip place="top" />
      </div>

      {selectedRegion && (
        <div className="mt-5 p-4 border border-gray-300 rounded">
          <h2 className="font-bold pb-5 font-modernAntiqua text-center">
            {selectedRegion.name}
          </h2>
          <p className="font-montserrat">{selectedRegion.description}</p>
        </div>
      )}
    </div>
  );
};
